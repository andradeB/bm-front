'use client';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DataTable from '@/components/DataTable';
import Search from '@/components/Search';
import PaginationAction from '@/components/PaginationAction';
import {
  useGetBillingGroupsQuery,
  useDeleteBillingGroupMutation,
} from '@/features/billingGroups/billingGroupsApi';

export default function BillingGroupsPage() {
  const { data = [] } = useGetBillingGroupsQuery();
  const [deleteGroup] = useDeleteBillingGroupMutation();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalCount = data.length;

  return (
    <Box position="relative">
      <Search
        options={[{ key: 'id', label: 'ID' }]}
        defaultKey="id"
        onSearch={() => {}}
      />
      <DataTable
        data={data
          .slice((page - 1) * pageSize, page * pageSize)
          .map((g) => g as unknown as Record<string, string>)}
        options={[
          { key: 'baseAmount', columName: 'Valor' },
          { key: 'dueDay', columName: 'Vencimento' },
        ]}
        keyExtractor={(g) => g.id}
        onRowClick={(id) => router.push(`/billing-groups/${id}`)}
        onDelete={async (id) => {
          await deleteGroup(id);
        }}
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
      />
      <PaginationAction
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={setPage}
      />
      <Button
        position="fixed"
        bottom="8"
        right="8"
        colorScheme="blue"
        rounded="full"
        onClick={() => router.push('/billing-groups/new')}
      >
        +
      </Button>
    </Box>
  );
}
