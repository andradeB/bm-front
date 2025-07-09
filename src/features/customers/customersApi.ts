import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';

export interface Customer {
  id: string;
  name: string;
  document: string;
  billingGroupId: string;
}

export interface CustomerInput {
  name: string;
  document: string;
  billingGroupId: string;
}

export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      const partnerId = state.auth.partnerId;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      if (partnerId) headers.set('x-school-id', partnerId);
      return headers;
    },
  }),
  tagTypes: ['Customer'],
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], void>({
      query: () => 'customers',
      providesTags: ['Customer'],
    }),
    getCustomer: builder.query<Customer, string>({
      query: (id) => `customers/${id}`,
    }),
    createCustomer: builder.mutation<Customer, CustomerInput>({
      query: (data) => ({ url: 'customers', method: 'POST', body: data }),
      invalidatesTags: ['Customer'],
    }),
    updateCustomer: builder.mutation<Customer, { id: string } & CustomerInput>({
      query: ({ id, ...data }) => ({ url: `customers/${id}`, method: 'PUT', body: data }),
      invalidatesTags: ['Customer'],
    }),
    deleteCustomer: builder.mutation<{ deleted: boolean }, string>({
      query: (id) => ({ url: `customers/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Customer'],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
