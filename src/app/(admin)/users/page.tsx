'use client';

import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DataTable from '@/components/DataTable';
import Search from '@/components/Search';
import PaginationAction from '@/components/PaginationAction';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '@/features/users/usersApi';

export default function UsersPage() {
  const { data = [] } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalCount = data.length;

  return (
    <Box position="relative">
      <Search
        options={[{ key: 'email', label: 'Email' }]}
        defaultKey="email"
        onSearch={() => {}}
      />
      <DataTable
        data={data
          .slice((page - 1) * pageSize, page * pageSize)
          .map((u) => u as unknown as Record<string, string>)}
        options={[{ key: 'email', columName: 'Email' }]}
        keyExtractor={(u) => u.id}
        onRowClick={(id) => router.push(`/users/${id}`)}
        onDelete={async (id) => {
          await deleteUser(id);
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
        onClick={() => router.push('/users/new')}
      >
        +
      </Button>
    </Box>
  );
}
