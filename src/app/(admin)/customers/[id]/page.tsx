'use client';
import { Box } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import CustomerForm, { CustomerFormData } from '../CustomerForm';
import {
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} from '@/features/customers/customersApi';

export default function EditCustomerPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data } = useGetCustomerQuery(id);
  const [updateCustomer] = useUpdateCustomerMutation();
  const router = useRouter();

  const handleSubmit = async (form: CustomerFormData) => {
    await updateCustomer({ id, data: form }).unwrap();
    router.push('/customers');
  };

  if (!data) return null;

  return (
    <Box>
      <CustomerForm
        onSubmit={handleSubmit}
        defaultValues={{
          name: data.name,
          document: data.document,
          billingGroupId: data.billingGroupId,
        }}
      />
    </Box>
  );
}
