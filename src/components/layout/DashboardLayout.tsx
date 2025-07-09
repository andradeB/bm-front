"use client";

import { Box, Flex, Button, Text, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useAppDispatch } from "@/store/hooks";
import { clearToken } from "@/features/auth/authSlice";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const pageTitle = pathname.startsWith("/settings") ? "Configuraçoes" : "Dashboard";

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
        <Stack as="nav" gap="2">
          <Link asChild color={pathname === "/dashboard" ? "blue.600" : undefined}>
            <NextLink href="/dashboard">Dashboard</NextLink>
          </Link>
          <Link asChild color={pathname.startsWith("/settings") ? "blue.600" : undefined}>
            <NextLink href="/settings">Configuração</NextLink>
          </Link>
        </Stack>
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
          <Text fontWeight="medium">{pageTitle}</Text>
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
