import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';

export interface User {
  id: string;
  email: string;
}

export interface UserInput {
  email: string;
  password?: string;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
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
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
      providesTags: ['User'],
    }),
    getUser: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
    createUser: builder.mutation<User, UserInput>({
      query: (data) => ({ url: 'users', method: 'POST', body: data }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<User, { id: string } & UserInput>({
      query: ({ id, ...data }) => ({ url: `users/${id}`, method: 'PUT', body: data }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<{ deleted: boolean }, string>({
      query: (id) => ({ url: `users/${id}`, method: 'DELETE' }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
