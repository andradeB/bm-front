'use client';

import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearToken, selectToken } from '@/features/auth/authSlice';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(clearToken());
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (!token) return null;

  return (
    <Box maxW="md" mx="auto" mt="10">
      <VStack gap="4">
        <Heading size="md">Dashboard</Heading>
        <Text>Token: {token}</Text>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </VStack>
    </Box>
  );
}
