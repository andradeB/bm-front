import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';

export interface Partner {
  id: string;
  name: string;
  document: string;
}

export const partnersApi = createApi({
  reducerPath: 'partnersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      const partnerId = state.app.selectedPartnerId;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      if (partnerId) headers.set('x-school-id', partnerId);
      return headers;
    },
  }),
  tagTypes: ['Partner'],
  endpoints: (builder) => ({
    getPartners: builder.query<Partner[], void>({
      query: () => 'partners',
      providesTags: ['Partner'],
    }),
    getPartner: builder.query<Partner, string>({
      query: (id) => `partners/${id}`,
    }),
    createPartner: builder.mutation<void, Omit<Partner, 'id'>>({
      query: (data) => ({ url: 'partners', method: 'POST', body: data }),
      invalidatesTags: ['Partner'],
    }),
    updatePartner: builder.mutation<void, Partner>({
      query: ({ id, ...data }) => ({
        url: `partners/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Partner'],
    }),
    deletePartner: builder.mutation<void, string>({
      query: (id) => ({ url: `partners/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Partner'],
    }),
  }),
});

export const {
  useGetPartnersQuery,
  useGetPartnerQuery,
  useCreatePartnerMutation,
  useUpdatePartnerMutation,
  useDeletePartnerMutation,
} = partnersApi;
