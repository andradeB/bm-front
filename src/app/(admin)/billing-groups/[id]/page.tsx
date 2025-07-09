'use client';
import { Box } from '@chakra-ui/react';
import { useRouter, useParams } from 'next/navigation';
import BillingGroupForm, { BillingGroupFormData } from '../BillingGroupForm';
import {
  useGetBillingGroupQuery,
  useUpdateBillingGroupMutation,
} from '@/features/billingGroups/billingGroupsApi';

export default function EditBillingGroupPage() {
  const params = useParams();
  const id = params?.id as string;
  const { data } = useGetBillingGroupQuery(id);
  const [updateGroup] = useUpdateBillingGroupMutation();
  const router = useRouter();

  const handleSubmit = async (form: BillingGroupFormData) => {
    await updateGroup({ id, data: form }).unwrap();
    router.push('/billing-groups');
  };

  if (!data) return null;

  return (
    <Box>
      <BillingGroupForm
        onSubmit={handleSubmit}
        defaultValues={{
          baseAmount: data.baseAmount,
          dueDay: data.dueDay,
          finePercent: data.finePercent,
          interestPercentMonth: data.interestPercentMonth,
        }}
      />
    </Box>
  );
}
