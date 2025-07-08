"use client";

import { Box, Flex, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useAppDispatch } from "@/store/hooks";
import { clearToken } from "@/features/auth/authSlice";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(clearToken());
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <Flex minH="100vh" bg="gray.50">
      <Box
        as="aside"
        w={{ base: "full", md: 60 }}
        p="6"
        bg="white"
        borderRightWidth="1px"
      >
        <Text fontSize="lg" fontWeight="bold" mb="6">
          Boleto Manager
        </Text>
        <Flex direction="column" gap="2">
          <Button as={Link} href="/dashboard" variant="ghost" justifyContent="flex-start">
            Dashboard
          </Button>
          <Button as={Link} href="/partners" variant="ghost" justifyContent="flex-start">
            Partners
          </Button>
        </Flex>
      </Box>
      <Flex direction="column" flex="1">
        <Flex
          as="header"
          h="16"
          align="center"
          justify="space-between"
          px="6"
          borderBottomWidth="1px"
          bg="white"
        >
          <Text fontWeight="medium">Dashboard</Text>
          <Button size="sm" onClick={handleLogout} colorScheme="red">
            Sair
          </Button>
        </Flex>
        <Box as="main" p="6" flex="1">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
