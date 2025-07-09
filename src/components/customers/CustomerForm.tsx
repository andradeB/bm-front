'use client';

import { Box, Button, Input, VStack, Text, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface CustomerFormData {
  name: string;
  document: string;
  billingGroupId: string;
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  document: yup.string().required('Documento obrigatório'),
  billingGroupId: yup.string().required('Grupo obrigatório'),
});

interface Props {
  defaultValues?: CustomerFormData;
  onSubmit: (data: CustomerFormData) => void;
  isLoading?: boolean;
  onCancel: () => void;
  billingGroups: { id: string; dueDay: number }[];
}

export default function CustomerForm({
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
  billingGroups,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack gap="4">
        <Box w="full">
          <Input placeholder="Nome" {...register('name')} />
          {errors.name && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.name.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Input placeholder="Documento" {...register('document')} />
          {errors.document && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.document.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Select placeholder="Selecione" {...register('billingGroupId')}>
            {billingGroups.map((bg) => (
              <option key={bg.id} value={bg.id}>{`Vencimento dia ${bg.dueDay}`}</option>
            ))}
          </Select>
          {errors.billingGroupId && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.billingGroupId.message}
            </Text>
          )}
        </Box>
        <VStack w="full" align="stretch" gap="2">
          <Button onClick={onCancel} colorScheme="gray">
            Voltar
          </Button>
          <Button type="submit" colorScheme="blue" isLoading={isLoading}>
            Salvar
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
