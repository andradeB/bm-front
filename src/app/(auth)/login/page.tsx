'use client';

import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Alert,
  Flex,
  Text,
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (token) {
      router.replace('/dashboard');
    }
  }, [token, router]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await login(data).unwrap();
      const { token } = res;
      dispatch(setToken(token));
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        rounded="xl"
        shadow="lg"
        w="full"
        maxW="md"
      >
        <Heading size="md" mb="6" textAlign="center">
          Acesse sua conta
        </Heading>
        {error && (
          <Alert.Root status="error" mb="4">
            <Alert.Indicator /> Falha ao entrar
          </Alert.Root>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack gap="4">
            <Box w="full">
              <Input
                type="email"
                placeholder="Email"
                {...register('email')}
                borderRadius="lg"
                h="50px"
              />
              {errors.email && (
                <Text color="red.500" fontSize="sm" mt="1">
                  {errors.email.message}
                </Text>
              )}
            </Box>
            <Box w="full">
              <Input
                type="password"
                placeholder="Senha"
                {...register('password')}
                borderRadius="lg"
                h="50px"
              />
              {errors.password && (
                <Text color="red.500" fontSize="sm" mt="1">
                  {errors.password.message}
                </Text>
              )}
            </Box>
            <Button
              type="submit"
              loading={isLoading}
              colorScheme="blue"
              w="full"
              h="50px"
              borderRadius="lg"
            >
              Entrar
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
