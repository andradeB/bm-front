# AGENT.md – AI Behavioral Guide

> 📌 The project uses the **Next.js App Router** located under `src/app/`.
> Do not use the legacy `pages/` directory. All routing must follow App Router conventions.

> ❗ This project **does not benefit from SSR (Server-Side Rendering)**.
> All rendering must be client-side. Do **not** use `getServerSideProps`, `getStaticProps`, or any server rendering strategy.

---

## 🔒 Constraints

- ❌ Do NOT override Chakra UI components manually
- ❌ Do NOT inject raw CSS or use custom styles outside Chakra props
- ❌ Do NOT use Zustand, Recoil, SWR, or any other state management libraries
- ❌ Do NOT implement class-based components, HOCs, or custom hooks unless strictly necessary
- ❌ Do NOT use fetch/axios directly — always use RTK Query

---

## ✅ Guidelines

- ✅ Use Redux Toolkit + RTK Query for all state and data handling
- ✅ Use Chakra UI 3.22 with **light theme only**
- ✅ All forms must use React Hook Form + Yup
- ✅ Do NOT style components outside the Chakra prop API
- ✅ If unsure how to style something, consult:
  - 📚 Chakra UI v3.22: https://chakra-ui.com/docs/components/overview
  - 📘 v2 to v3 Migration Guide: https://chakra-ui.com/docs/get-started/migration

---

## 📁 Chakra UI Structure Notice

Installing Chakra UI may create the folder:

```
src/components/ui/
├── color-mode.tsx
├── provider.tsx
├── toaster.tsx
├── tooltip.tsx
```

Do **not** remove or override these. They are safe, reusable, and must remain unedited unless for theming configuration.

---

## 🧠 Feature Development Workflow (Example: Partners)

Use this as a reference for any new feature (CRUD).

### 1. Create API Slice

```ts
// src/features/partners/partnersApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnersApi = createApi({
  reducerPath: "partnersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/v1" }),
  tagTypes: ["Partner"],
  endpoints: (builder) => ({
    getPartners: builder.query({
      query: (params) => ({ url: "partners", params }),
      providesTags: ["Partner"],
    }),
    getPartner: builder.query({
      query: (id) => `partners/${id}`,
    }),
    createPartner: builder.mutation({
      query: (data) => ({ url: "partners", method: "POST", body: data }),
      invalidatesTags: ["Partner"],
    }),
    updatePartner: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `partners/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Partner"],
    }),
    deletePartner: builder.mutation({
      query: (id) => ({ url: `partners/${id}`, method: "DELETE" }),
      invalidatesTags: ["Partner"],
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
```

### 2. Register Slice in Store

```ts
// src/store/index.ts
import { partnersApi } from '@/features/partners/partnersApi';

middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(partnersApi.middleware),

reducers: {
  [partnersApi.reducerPath]: partnersApi.reducer,
}
```

### 3. Create List Page

```tsx
// src/app/(admin)/partners/page.tsx
const { data, isLoading } = useGetPartnersQuery(router.query);
return isLoading ? <Skeleton /> : <PartnerTable data={data} />;
```

Use Chakra UI table, buttons, and pagination components **with only documented props**.

### 4. Create Form Page

```tsx
// src/app/(admin)/partners/[id]/page.tsx
const isNew = id === "new";
const { data } = useGetPartnerQuery(id, { skip: isNew });
const form = useForm({ defaultValues: data || {} });

const onSubmit = isNew ? createPartner : updatePartner;
```

Use Chakra `Input`, `FormLabel`, `Button`, etc. No custom CSS.

---

## 🌐 Request Headers

Each request must include:

- `Authorization: Bearer {token}`
- `x-school-id: {selectedPartnerId}`

Both are stored in Redux and restored from `localStorage` on boot.

---

## 🧩 Final Philosophy

> Keep it **simple**, **predictable**, and **aligned with the backend**.  
> Query string is the source of truth.  
> No styling hacks. No unnecessary abstractions.  
> When in doubt, read the doc.
