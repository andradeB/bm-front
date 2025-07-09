'use client';

import { Box, Spinner, useToast } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import BillingGroupForm, { BillingGroupFormData } from '@/components/billingGroups/BillingGroupForm';
import {
  useCreateBillingGroupMutation,
  useGetBillingGroupQuery,
  useUpdateBillingGroupMutation,
} from '@/features/billingGroups/billingGroupsApi';

export default function BillingGroupFormPage() {
  const params = useParams();
  const id = params?.id as string;
  const isNew = id === 'new';
  const { data, isLoading } = useGetBillingGroupQuery(id, { skip: isNew });
  const [createBillingGroup] = useCreateBillingGroupMutation();
  const [updateBillingGroup] = useUpdateBillingGroupMutation();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (values: BillingGroupFormData) => {
    try {
      if (isNew) {
        await createBillingGroup(values).unwrap();
      } else {
        await updateBillingGroup({ id, ...values }).unwrap();
      }
      toast({ status: 'success', title: 'Salvo com sucesso' });
      router.push('/billing-groups');
    } catch {
      toast({ status: 'error', title: 'Erro ao salvar' });
    }
  };

  const handleCancel = () => {
    if (confirm('As alterações não salvas serão perdidas. Deseja continuar?')) {
      router.push('/billing-groups');
    }
  };

  if (!isNew && isLoading) return <Spinner />;

  return (
    <Box>
      <BillingGroupForm
        defaultValues={data}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Box>
  );
}
