# Boleto Manager Admin Frontend

This is the official frontend admin panel for the Boleto Manager system. It provides authenticated access to manage users, schools (partners), customers, billing groups, and monitor boleto generation tasks.

---

## 🛠️ Technologies

- [Next.js 15](https://nextjs.org/) (App Router, TypeScript)
- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) with RTK Query
- [Chakra UI 3.22](https://chakra-ui.com/)
- [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup)

---

## 📁 Project Structure

```
/src
├── app/                     # Next.js App Router
│   ├── (auth)/login         # Login page (public)
│   ├── (admin)/dashboard    # Admin routes (protected)
│   └── (admin)/users        # Feature-based routing
├── features/                # Redux slices + RTK Query APIs per domain
├── shared/                  # Reusable components, hooks, utils
├── store/                   # Centralized Redux store
├── styles/                  # Chakra theme
└── types/                   # Global TS types
```
