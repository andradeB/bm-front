'use client';

import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

export default function DashboardPage() {
  return (
    <Box>
      <Heading size="md" mb="6">
        Visão geral
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        <Box p="8" bg="white" rounded="lg" shadow="sm" minH="36">
          <Text color="gray.500">Conteúdo em construção</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
