'use client';

import { Box, Button, IconButton, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetBillingGroupsQuery, useDeleteBillingGroupMutation } from '@/features/billingGroups/billingGroupsApi';

export default function BillingGroupsPage() {
  const { data, isLoading } = useGetBillingGroupsQuery();
  const [deleteBillingGroup] = useDeleteBillingGroupMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este registro?')) {
      await deleteBillingGroup(id);
    }
  };

  return (
    <Box position="relative">
      <Text fontSize="lg" mb="4">
        Grupos de Cobrança
      </Text>
      {isLoading && <Spinner />}
      <List spacing="3">
        {data?.map((bg) => (
          <ListItem
            key={bg.id}
            p="3"
            bg="white"
            rounded="md"
            shadow="sm"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => router.push(`/billing-groups/${bg.id}`)}
            cursor="pointer"
          >
            <Text>{`Vencimento dia ${bg.dueDay}`}</Text>
            <IconButton
              aria-label="Excluir"
              icon={<DeleteIcon />}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(bg.id);
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
        href="/billing-groups/new"
      >
        <AddIcon />
      </Button>
    </Box>
  );
}
