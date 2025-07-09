'use client';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import CustomerForm, { CustomerFormData } from '../CustomerForm';
import { useCreateCustomerMutation } from '@/features/customers/customersApi';

export default function NewCustomerPage() {
  const [createCustomer] = useCreateCustomerMutation();
  const router = useRouter();

  const handleSubmit = async (data: CustomerFormData) => {
    await createCustomer(data).unwrap();
    router.push('/customers');
  };

  return (
    <Box>
      <CustomerForm onSubmit={handleSubmit} />
    </Box>
  );
}
