'use client';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  document: yup.string().required('Documento é obrigatório'),
  billingGroupId: yup.string().required('Grupo é obrigatório'),
});

export type CustomerFormData = yup.InferType<typeof schema>;

export default function CustomerForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: Partial<CustomerFormData>;
  onSubmit: (data: CustomerFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" maxW="sm">
        <Field.Root invalid={!!errors.name}>
          <Field.Label>Nome</Field.Label>
          <Input {...register('name')} />
          {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
        </Field.Root>
        <Field.Root invalid={!!errors.document}>
          <Field.Label>Documento</Field.Label>
          <Input {...register('document')} />
          {errors.document && (
            <Field.ErrorText>{errors.document.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.billingGroupId}>
          <Field.Label>Grupo</Field.Label>
          <Input {...register('billingGroupId')} />
          {errors.billingGroupId && (
            <Field.ErrorText>{errors.billingGroupId.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Button type="submit" colorScheme="blue">
          Salvar
        </Button>
      </Stack>
    </form>
  );
}
