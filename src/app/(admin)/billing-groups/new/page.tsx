'use client';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import BillingGroupForm, { BillingGroupFormData } from '../BillingGroupForm';
import { useCreateBillingGroupMutation } from '@/features/billingGroups/billingGroupsApi';

export default function NewBillingGroupPage() {
  const [createGroup] = useCreateBillingGroupMutation();
  const router = useRouter();

  const handleSubmit = async (data: BillingGroupFormData) => {
    await createGroup(data).unwrap();
    router.push('/billing-groups');
  };

  return (
    <Box>
      <BillingGroupForm onSubmit={handleSubmit} />
    </Box>
  );
}
