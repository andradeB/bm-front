'use client';

import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface UserFormData {
  email: string;
  password?: string;
}

const schema = yup.object({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().notRequired(),
});

interface Props {
  defaultValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  isLoading?: boolean;
  onCancel: () => void;
}

export default function UserForm({
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack gap="4">
        <Box w="full">
          <Input placeholder="Email" {...register('email')} />
          {errors.email && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.email.message}
            </Text>
          )}
        </Box>
        <Box w="full">
          <Input type="password" placeholder="Senha" {...register('password')} />
          {errors.password && (
            <Text fontSize="sm" color="red.500" mt="1">
              {errors.password.message}
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
