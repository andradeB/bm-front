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

export const billingGroupsApi = createApi({
  reducerPath: 'billingGroupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/v1',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
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
      providesTags: (_r, _e, id) => [{ type: 'BillingGroup', id }],
    }),
    createBillingGroup: builder.mutation<BillingGroup, Omit<BillingGroup, 'id'>>({
      query: (body) => ({
        url: 'billing-groups',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BillingGroup'],
    }),
    updateBillingGroup: builder.mutation<BillingGroup, { id: string; data: Partial<BillingGroup> }>({
      query: ({ id, data }) => ({
        url: `billing-groups/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['BillingGroup'],
    }),
    deleteBillingGroup: builder.mutation<void, string>({
      query: (id) => ({
        url: `billing-groups/${id}`,
        method: 'DELETE',
      }),
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
