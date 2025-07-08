'use client';

import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Alert,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginMutation } from '@/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setToken, selectToken } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

export default function LoginPage() {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (token) {
      router.replace('/');
    }
  }, [token, router]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data).unwrap();
      const { token } = res;
      dispatch(setToken(token));
      localStorage.setItem('token', token);
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Heading mb="6" textAlign="center">
        Login
      </Heading>
      {error && (
        <Alert.Root status="error" mb="4">
          <Alert.Indicator /> Failed to login
        </Alert.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap="4">
          <Input placeholder="Email" type="email" {...register('email')} />
          <Input placeholder="Password" type="password" {...register('password')} />
          <Button type="submit" loading={isLoading} colorScheme="blue" w="full">
            Sign in
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
