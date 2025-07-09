'use client';

import { Box, Button, IconButton, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetUsersQuery, useDeleteUserMutation } from '@/features/users/usersApi';

export default function UsersPage() {
  const { data, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este registro?')) {
      await deleteUser(id);
    }
  };

  return (
    <Box position="relative">
      <Text fontSize="lg" mb="4">
        Usuários
      </Text>
      {isLoading && <Spinner />}
      <List spacing="3">
        {data?.map((u) => (
          <ListItem
            key={u.id}
            p="3"
            bg="white"
            rounded="md"
            shadow="sm"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => router.push(`/users/${u.id}`)}
            cursor="pointer"
          >
            <Text>{u.email}</Text>
            <IconButton
              aria-label="Excluir"
              icon={<DeleteIcon />}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(u.id);
              }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        position="fixed"
        bottom="6"
        right="6"
        colorScheme="blue"
        rounded="full"
        p="0"
        w="14"
        h="14"
        as={Link}
        href="/users/new"
      >
        <AddIcon />
      </Button>
    </Box>
  );
}
