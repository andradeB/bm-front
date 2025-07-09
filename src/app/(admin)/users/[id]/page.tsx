'use client';

import { Box, Spinner, useToast } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import UserForm, { UserFormData } from '@/components/users/UserForm';
import {
  useCreateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from '@/features/users/usersApi';

export default function UserFormPage() {
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { data, isLoading } = useGetUserQuery(id, { skip: isNew });
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (values: UserFormData) => {
    try {
      if (isNew) {
        await createUser(values).unwrap();
      } else {
        await updateUser({ id, ...values }).unwrap();
      }
      toast({ status: 'success', title: 'Salvo com sucesso' });
      router.push('/users');
    } catch {
      toast({ status: 'error', title: 'Erro ao salvar' });
    }
  };

  const handleCancel = () => {
    if (confirm('As alterações não salvas serão perdidas. Deseja continuar?')) {
      router.push('/users');
    }
  };

  if (!isNew && isLoading) return <Spinner />;

  return (
    <Box>
      <UserForm
        defaultValues={data}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Box>
  );
}
