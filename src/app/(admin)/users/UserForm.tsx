'use client';
import { Button, Field, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required('Email é obrigatório').email(),
  password: yup.string().notRequired(),
});

export type UserFormData = yup.InferType<typeof schema>;

export default function UserForm({
  defaultValues,
  onSubmit,
}: {
  defaultValues?: Partial<UserFormData>;
  onSubmit: (data: UserFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" maxW="sm">
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email</Field.Label>
          <Input {...register('email')} />
          {errors.email && (
            <Field.ErrorText>{errors.email.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={!!errors.password}>
          <Field.Label>Senha</Field.Label>
          <Input type="password" {...register('password')} />
          {errors.password && (
            <Field.ErrorText>{errors.password.message}</Field.ErrorText>
          )}
        </Field.Root>
        <Button type="submit" colorScheme="blue">
          Salvar
        </Button>
      </Stack>
    </form>
  );
}
