'use client';

import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface BillingGroupFormData {
  baseAmount: number;
  dueDay: number;
  finePercent: number;
  interestPercentMonth: number;
}

const schema = yup.object({
  baseAmount: yup.number().required('Valor base obrigatório'),
  dueDay: yup.number().required('Dia de vencimento obrigatório'),
  finePercent: yup.number().required('Multa obrigatória'),
  interestPercentMonth: yup.number().required('Juros obrigatório'),
});

interface Props {
  defaultValues?: BillingGroupFormData;
  onSubmit: (data: BillingGroupFormData) => void;
  isLoading?: boolean;
  onCancel: () => void;
}

export default function BillingGroupForm({
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingGroupFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack gap="4">
        <Box w="full">
          <Input type="number" placeholder="Valor Base" {...register('baseAmount', { valueAsNumber: true })} />
          {errors.baseAmount && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.baseAmount.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Input type="number" placeholder="Dia de Vencimento" {...register('dueDay', { valueAsNumber: true })} />
          {errors.dueDay && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.dueDay.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Input type="number" placeholder="% Multa" {...register('finePercent', { valueAsNumber: true })} />
          {errors.finePercent && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.finePercent.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Input type="number" placeholder="% Juros ao Mês" {...register('interestPercentMonth', { valueAsNumber: true })} />
          {errors.interestPercentMonth && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.interestPercentMonth.message}
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
