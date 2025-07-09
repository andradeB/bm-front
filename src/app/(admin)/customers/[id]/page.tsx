'use client';

import { Box, Spinner, useToast } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import CustomerForm, { CustomerFormData } from '@/components/customers/CustomerForm';
import {
  useCreateCustomerMutation,
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} from '@/features/customers/customersApi';
import { useGetBillingGroupsQuery } from '@/features/billingGroups/billingGroupsApi';

export default function CustomerFormPage() {
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { data, isLoading } = useGetCustomerQuery(id, { skip: isNew });
  const [createCustomer] = useCreateCustomerMutation();
  const [updateCustomer] = useUpdateCustomerMutation();
  const { data: billingGroups } = useGetBillingGroupsQuery();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (values: CustomerFormData) => {
    try {
      if (isNew) {
        await createCustomer(values).unwrap();
      } else {
        await updateCustomer({ id, ...values }).unwrap();
      }
      toast({ status: 'success', title: 'Salvo com sucesso' });
      router.push('/customers');
    } catch {
      toast({ status: 'error', title: 'Erro ao salvar' });
    }
  };

  const handleCancel = () => {
    if (confirm('As alterações não salvas serão perdidas. Deseja continuar?')) {
      router.push('/customers');
    }
  };

  if (!isNew && isLoading) return <Spinner />;

  return (
    <Box>
      <CustomerForm
        defaultValues={data}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        billingGroups={billingGroups || []}
      />
    </Box>
  );
}
