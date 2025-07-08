'use client';

import {
  Box,
  IconButton,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import {
  useGetPartnersQuery,
  useDeletePartnerMutation,
} from '@/features/partners/partnersApi';

export default function PartnersPage() {
  const router = useRouter();
  const { data, isLoading } = useGetPartnersQuery();
  const [deletePartner] = useDeletePartnerMutation();

  const handleDelete = async (id: string) => {
    const ok = window.confirm('Tem certeza de que deseja excluir este parceiro?');
    if (!ok) return;
    try {
      await deletePartner(id).unwrap();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box position="relative">
      <Text fontSize="lg" fontWeight="bold" mb="6">
        Parceiros
      </Text>
      {isLoading ? (
        <Skeleton h="40" />
      ) : (
        <Table bg="white" rounded="lg" shadow="sm">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Documento</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((partner) => (
              <Tr
                key={partner.id}
                _hover={{ bg: 'gray.50' }}
                cursor="pointer"
                onClick={() => router.push(`/partners/${partner.id}`)}
              >
                <Td>{partner.name}</Td>
                <Td>{partner.document}</Td>
                <Td textAlign="right" onClick={(e) => e.stopPropagation()}>
                  <IconButton
                    size="sm"
                    aria-label="Excluir"
                    icon={<FiTrash2 />}
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => handleDelete(partner.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <IconButton
        aria-label="Novo"
        icon={<FiPlus />}
        position="fixed"
        bottom="6"
        right="6"
        colorScheme="blue"
        borderRadius="full"
        size="lg"
        onClick={() => router.push('/partners/new')}
      />
    </Box>
  );
}
