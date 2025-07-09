'use client';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DataTable from '@/components/DataTable';
import Search from '@/components/Search';
import PaginationAction from '@/components/PaginationAction';
import {
  useGetCustomersQuery,
  useDeleteCustomerMutation,
} from '@/features/customers/customersApi';

export default function CustomersPage() {
  const { data = [] } = useGetCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalCount = data.length;

  return (
    <Box position="relative">
      <Search
        options={[{ key: 'name', label: 'Nome' }]}
        defaultKey="name"
        onSearch={() => {}}
      />
      <DataTable
        data={data.slice((page - 1) * pageSize, page * pageSize)}
        options={[
          { key: 'name', label: 'Nome' },
          { key: 'document', label: 'Documento' },
        ]}
        onRowClick={(id) => router.push(`/customers/${id}`)}
        onDelete={async (id) => {
          await deleteCustomer(id);
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
        onClick={() => router.push('/customers/new')}
      >
        +
      </Button>
    </Box>
  );
}
