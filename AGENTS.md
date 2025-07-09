# AGENT.md – AI Behavioral Guide

> 📌 This project uses the **Next.js App Router** under `src/app/`.  
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
- ❌ Do NOT use components that are not documented under `docs/components`

---

## ✅ Guidelines

- ✅ Use Redux Toolkit + RTK Query for all state and data handling
- ✅ Use Chakra UI 3.22 with **light theme only**
- ✅ All forms must use React Hook Form + Yup
- ✅ Do NOT style components outside the Chakra prop API
- ✅ Only use components listed in the `docs/components` folder
- ✅ To find the list of all approved components, refer to the `docs/components/index.md` file
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

Do **not** remove or override these files. They are safe, reusable, and must remain unedited unless for theming configuration.
