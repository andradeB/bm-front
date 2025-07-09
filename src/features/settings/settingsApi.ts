import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';

export interface Partner {
  id: string;
  name: string;
  createdBy?: string;
}

export interface Provider {
  id: string;
  code: string;
  name: string;
}

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      const partnerId = state.app.selectedPartnerId;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      if (partnerId) {
        headers.set('x-school-id', partnerId);
      }
      return headers;
    },
  }),
  tagTypes: ['Partner', 'Provider'],
  endpoints: (builder) => ({
    getPartners: builder.query<Partner[], void>({
      query: () => 'partners',
      providesTags: ['Partner'],
    }),
    createPartner: builder.mutation<Partner, Pick<Partner, 'name'>>({
      query: (body) => ({
        url: 'partners',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Partner'],
    }),
    updatePartner: builder.mutation<Partner, { id: string; data: Pick<Partner, 'name'> }>(
      {
        query: ({ id, data }) => ({
          url: `partners/${id}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: ['Partner'],
      }
    ),
    deletePartner: builder.mutation<void, string>({
      query: (id) => ({
        url: `partners/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Partner'],
    }),
    getProviders: builder.query<Provider[], void>({
      query: () => 'providers',
      providesTags: ['Provider'],
    }),
    createProvider: builder.mutation<Provider, Pick<Provider, 'code' | 'name'>>({
      query: (body) => ({
        url: 'providers',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Provider'],
    }),
    updateProvider: builder.mutation<Provider, { id: string; data: Pick<Provider, 'code' | 'name'> }>(
      {
        query: ({ id, data }) => ({
          url: `providers/${id}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: ['Provider'],
      }
    ),
    deleteProvider: builder.mutation<void, string>({
      query: (id) => ({
        url: `providers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Provider'],
    }),
  }),
});

export const {
  useGetPartnersQuery,
  useCreatePartnerMutation,
  useUpdatePartnerMutation,
  useDeletePartnerMutation,
  useGetProvidersQuery,
  useCreateProviderMutation,
  useUpdateProviderMutation,
  useDeleteProviderMutation,
} = settingsApi;
