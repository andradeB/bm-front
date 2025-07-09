'use client';
import { Box } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import UserForm, { UserFormData } from '../UserForm';
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '@/features/users/usersApi';

export default function EditUserPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data } = useGetUserQuery(id);
  const [updateUser] = useUpdateUserMutation();
  const router = useRouter();

  const handleSubmit = async (form: UserFormData) => {
    await updateUser({ id, data: form }).unwrap();
    router.push('/users');
  };

  if (!data) return null;

  return (
    <Box>
      <UserForm onSubmit={handleSubmit} defaultValues={{ email: data.email }} />
    </Box>
  );
}
