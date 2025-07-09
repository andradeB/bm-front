'use client';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import UserForm, { UserFormData } from '../UserForm';
import { useCreateUserMutation } from '@/features/users/usersApi';

export default function NewUserPage() {
  const [createUser] = useCreateUserMutation();
  const router = useRouter();

  const handleSubmit = async (data: UserFormData) => {
    await createUser({ email: data.email, password: data.password ?? '' }).unwrap();
    router.push('/users');
  };

  return (
    <Box>
      <UserForm onSubmit={handleSubmit} />
    </Box>
  );
}
