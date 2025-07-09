'use client';

import { Box, Button, IconButton, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetCustomersQuery, useDeleteCustomerMutation } from '@/features/customers/customersApi';

export default function CustomersPage() {
  const { data, isLoading } = useGetCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este registro?')) {
      await deleteCustomer(id);
    }
  };

  return (
    <Box position="relative">
      <Text fontSize="lg" mb="4">
        Clientes
      </Text>
      {isLoading && <Spinner />}
      <List spacing="3">
        {data?.map((c) => (
          <ListItem
            key={c.id}
            p="3"
            bg="white"
            rounded="md"
            shadow="sm"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => router.push(`/customers/${c.id}`)}
            cursor="pointer"
          >
            <Text>{c.name}</Text>
            <IconButton
              aria-label="Excluir"
              icon={<DeleteIcon />}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(c.id);
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
        href="/customers/new"
      >
        <AddIcon />
      </Button>
    </Box>
  );
}
