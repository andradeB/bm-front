'use client';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  baseAmount: yup.number().required('Valor é obrigatório'),
  dueDay: yup.number().required('Vencimento é obrigatório'),
  finePercent: yup.number().required('Multa é obrigatória'),
  interestPercentMonth: yup.number().required('Juros é obrigatório'),
});

export type BillingGroupFormData = yup.InferType<typeof schema>;

export default function BillingGroupForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: Partial<BillingGroupFormData>;
  onSubmit: (data: BillingGroupFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingGroupFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" maxW="sm">
        <Field.Root invalid={!!errors.baseAmount}>
          <Field.Label>Valor base</Field.Label>
          <Input type="number" {...register('baseAmount', { valueAsNumber: true })} />
          {errors.baseAmount && (
            <Field.ErrorText>{errors.baseAmount.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.dueDay}>
          <Field.Label>Dia de vencimento</Field.Label>
          <Input type="number" {...register('dueDay', { valueAsNumber: true })} />
          {errors.dueDay && (
            <Field.ErrorText>{errors.dueDay.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.finePercent}>
          <Field.Label>Multa (%)</Field.Label>
          <Input type="number" {...register('finePercent', { valueAsNumber: true })} />
          {errors.finePercent && (
            <Field.ErrorText>{errors.finePercent.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.interestPercentMonth}>
          <Field.Label>Juros (% mês)</Field.Label>
          <Input type="number" {...register('interestPercentMonth', { valueAsNumber: true })} />
          {errors.interestPercentMonth && (
            <Field.ErrorText>{errors.interestPercentMonth.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Button type="submit" colorScheme="blue">
          Salvar
        </Button>
      </Stack>
    </form>
  );
}
