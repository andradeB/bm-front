'use client';

import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  List,
  Stack,
  Tabs,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  useGetPartnersQuery,
  useCreatePartnerMutation,
  useUpdatePartnerMutation,
  useDeletePartnerMutation,
  useGetProvidersQuery,
  useCreateProviderMutation,
  useUpdateProviderMutation,
  useDeleteProviderMutation,
  type Partner,
  type Provider,
} from '@/features/settings/settingsApi';
import { toaster } from '@/components/ui/toaster';

function PartnerSection() {
  const { data: partners = [], refetch } = useGetPartnersQuery();
  const [createPartner] = useCreatePartnerMutation();
  const [updatePartner] = useUpdatePartnerMutation();
  const [deletePartner] = useDeletePartnerMutation();
  const [selected, setSelected] = useState<Partner | null>(null);

  const schema = yup.object({
    name: yup.string().required('Nome \u00e9 obrigat\u00f3rio'),
  });
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { name: '' },
  });

  useEffect(() => {
    if (selected) {
      reset({ name: selected.name });
    } else {
      reset({ name: '' });
    }
  }, [selected, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      if (selected) {
        await updatePartner({ id: selected.id, data }).unwrap();
      } else {
        await createPartner(data).unwrap();
      }
      toaster.create({ title: 'Registro salvo com sucesso' });
      setSelected(null);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!selected) return;
    const ok = window.confirm('Tem certeza de que deseja remover este registro?');
    if (ok) {
      try {
        await deletePartner(selected.id).unwrap();
        toaster.create({ title: 'Registro removido com sucesso' });
        setSelected(null);
        refetch();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box>
      <Heading size="sm" mb="4">
        Parceiros
      </Heading>
      <Flex gap="8" align="flex-start">
        <Box w="xs">
          <List.Root borderWidth="1px" rounded="md" overflow="hidden">
            {partners.map((p) => (
              <List.Item
                key={p.id}
                px="3"
                py="2"
                cursor="pointer"
                bg={selected?.id === p.id ? 'gray.100' : undefined}
                _hover={{ bg: 'gray.100' }}
                onClick={() => setSelected(p)}
              >
                {p.name}
              </List.Item>
            ))}
          </List.Root>
        </Box>
        <Box flex="1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="4">
              <Field.Root invalid={!!errors.name}>
                <Field.Label>Nome</Field.Label>
                <Input {...register('name')} />
                {errors.name && (
                  <Field.ErrorText>{errors.name.message}</Field.ErrorText>
                )}
              </Field.Root>
              <Flex gap="2">
                <Button type="button" onClick={() => setSelected(null)}>
                  Adicionar
                </Button>
                <Button type="submit" colorScheme="blue">
                  Salvar
                </Button>
                <Button
                  type="button"
                  colorScheme="red"
                  onClick={handleDelete}
                  isDisabled={!selected}
                >
                  Remover
                </Button>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

function ProviderSection() {
  const { data: providers = [], refetch } = useGetProvidersQuery();
  const [createProvider] = useCreateProviderMutation();
  const [updateProvider] = useUpdateProviderMutation();
  const [deleteProvider] = useDeleteProviderMutation();
  const [selected, setSelected] = useState<Provider | null>(null);

  const schema = yup.object({
    code: yup.string().required('C\u00f3digo \u00e9 obrigat\u00f3rio'),
    name: yup.string().required('Nome \u00e9 obrigat\u00f3rio'),
  });
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { code: '', name: '' },
  });

  useEffect(() => {
    if (selected) {
      reset({ code: selected.code, name: selected.name });
    } else {
      reset({ code: '', name: '' });
    }
  }, [selected, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      if (selected) {
        await updateProvider({ id: selected.id, data }).unwrap();
      } else {
        await createProvider(data).unwrap();
      }
      toaster.create({ title: 'Registro salvo com sucesso' });
      setSelected(null);
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!selected) return;
    const ok = window.confirm('Tem certeza de que deseja remover este registro?');
    if (ok) {
      try {
        await deleteProvider(selected.id).unwrap();
        toaster.create({ title: 'Registro removido com sucesso' });
        setSelected(null);
        refetch();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Box>
      <Heading size="sm" mb="4">
        Fornecedores
      </Heading>
      <Flex gap="8" align="flex-start">
        <Box w="xs">
          <List.Root borderWidth="1px" rounded="md" overflow="hidden">
            {providers.map((p) => (
              <List.Item
                key={p.id}
                px="3"
                py="2"
                cursor="pointer"
                bg={selected?.id === p.id ? 'gray.100' : undefined}
                _hover={{ bg: 'gray.100' }}
                onClick={() => setSelected(p)}
              >
                {p.name}
              </List.Item>
            ))}
          </List.Root>
        </Box>
        <Box flex="1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap="4">
              <Field.Root invalid={!!errors.code}>
                <Field.Label>C\u00f3digo</Field.Label>
                <Input {...register('code')} />
                {errors.code && (
                  <Field.ErrorText>{errors.code.message}</Field.ErrorText>
                )}
              </Field.Root>
              <Field.Root invalid={!!errors.name}>
                <Field.Label>Nome</Field.Label>
                <Input {...register('name')} />
                {errors.name && (
                  <Field.ErrorText>{errors.name.message}</Field.ErrorText>
                )}
              </Field.Root>
              <Flex gap="2">
                <Button type="button" onClick={() => setSelected(null)}>
                  Adicionar
                </Button>
                <Button type="submit" colorScheme="blue">
                  Salvar
                </Button>
                <Button
                  type="button"
                  colorScheme="red"
                  onClick={handleDelete}
                  isDisabled={!selected}
                >
                  Remover
                </Button>
              </Flex>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default function SettingsPage() {
  return (
    <Tabs.Root defaultValue="entidades">
      <Tabs.List mb="4">
        <Tabs.Trigger value="entidades">Entidades auxiliares</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="entidades">
        <Stack gap="10">
          <PartnerSection />
          <ProviderSection />
        </Stack>
      </Tabs.Content>
    </Tabs.Root>
  );
}
