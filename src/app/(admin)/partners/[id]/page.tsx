'use client';

import React, { useEffect } from 'react';
import { Box, Button, Input, VStack, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter, useParams } from 'next/navigation';
import {
  useGetPartnerQuery,
  useCreatePartnerMutation,
  useUpdatePartnerMutation,
} from '@/features/partners/partnersApi';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  document: yup.string().required('Documento é obrigatório'),
});

type FormData = yup.InferType<typeof schema>;

export default function PartnerFormPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === 'new';
  const { data } = useGetPartnerQuery(id, { skip: isNew });
  const [createPartner, { isLoading: creating }] = useCreatePartnerMutation();
  const [updatePartner, { isLoading: updating }] = useUpdatePartnerMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', document: '' },
  });

  useEffect(() => {
    if (data) {
      reset({ name: data.name, document: data.document });
    }
  }, [data, reset]);

  const onSubmit = async (formData: FormData) => {
    try {
      if (isNew) {
        await createPartner(formData).unwrap();
      } else {
        await updatePartner({ id, ...formData }).unwrap();
      }
      router.push('/partners');
    } catch (err) {
      console.error(err);
    }
  };

  const handleBack = () => {
    const ok = window.confirm(
      'As alterações não salvas serão perdidas. Deseja continuar?'
    );
    if (ok) router.push('/partners');
  };

  return (
    <Box maxW="md" bg="white" p="6" rounded="lg" shadow="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap="4">
          <Box w="full">
            <Input placeholder="Nome" {...register('name')} />
            {errors.name && (
              <Text color="red.500" fontSize="sm" mt="1">
                {errors.name.message}
              </Text>
            )}
          </Box>
          <Box w="full">
            <Input placeholder="Documento" {...register('document')} />
            {errors.document && (
              <Text color="red.500" fontSize="sm" mt="1">
                {errors.document.message}
              </Text>
            )}
          </Box>
          <Box display="flex" gap="2" w="full" justifyContent="flex-end">
            <Button type="button" variant="outline" onClick={handleBack}>
              Voltar
            </Button>
            <Button
              type="submit"
              colorScheme="blue"
              loading={creating || updating}
            >
              Salvar
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
}
