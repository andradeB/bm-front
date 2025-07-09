import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';

export interface BillingGroup {
  id: string;
  baseAmount: number;
  dueDay: number;
  finePercent: number;
  interestPercentMonth: number;
  createdBy?: string;
}

export interface BillingGroupInput {
  baseAmount: number;
  dueDay: number;
  finePercent: number;
  interestPercentMonth: number;
  createdBy?: string;
}

export const billingGroupsApi = createApi({
  reducerPath: 'billingGroupsApi',
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
  tagTypes: ['BillingGroup'],
  endpoints: (builder) => ({
    getBillingGroups: builder.query<BillingGroup[], void>({
      query: () => 'billing-groups',
      providesTags: ['BillingGroup'],
    }),
    getBillingGroup: builder.query<BillingGroup, string>({
      query: (id) => `billing-groups/${id}`,
    }),
    createBillingGroup: builder.mutation<BillingGroup, BillingGroupInput>({
      query: (data) => ({ url: 'billing-groups', method: 'POST', body: data }),
      invalidatesTags: ['BillingGroup'],
    }),
    updateBillingGroup: builder.mutation<BillingGroup, { id: string } & BillingGroupInput>({
      query: ({ id, ...data }) => ({ url: `billing-groups/${id}`, method: 'PUT', body: data }),
      invalidatesTags: ['BillingGroup'],
    }),
    deleteBillingGroup: builder.mutation<{ deleted: boolean }, string>({
      query: (id) => ({ url: `billing-groups/${id}`, method: 'DELETE' }),
      invalidatesTags: ['BillingGroup'],
    }),
  }),
});

export const {
  useGetBillingGroupsQuery,
  useGetBillingGroupQuery,
  useCreateBillingGroupMutation,
  useUpdateBillingGroupMutation,
  useDeleteBillingGroupMutation,
} = billingGroupsApi;
