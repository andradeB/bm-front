# 📘 Boleto Manager – Frontend Architecture Guide

Este documento descreve **explicitamente** como o projeto **Boleto Manager (Frontend)** está estruturado, quais tecnologias devem ser usadas, quais convenções são obrigatórias e como novos desenvolvedores ou IAs devem contribuir.

---

## 🧱 Visão Geral

O frontend do Boleto Manager é uma SPA desenvolvida com as seguintes tecnologias:

| Tecnologia         | Uso                                                    |
|--------------------|--------------------------------------------------------|
| Vite               | Empacotador moderno para desenvolvimento e build       |
| React + TypeScript | Framework de UI + tipagem                             |
| TailwindCSS        | Estilização com utilitários + tema personalizado       |
| Redux Toolkit (RTK)| Gerenciamento de estado global (com `createSlice`)     |
| React Router DOM   | Roteamento público e privado                           |
| Axios              | Requisições HTTP com interceptadores configuráveis     |

---

## ✅ Padrões Obrigatórios

### Estado Global

> **O projeto usa exclusivamente o Redux Toolkit (RTK)** para gerenciamento de estado global.

- Todos os domínios (auth, boletos, clientes, etc.) devem possuir um `slice.ts` dentro do respectivo módulo.
- O `createAsyncThunk` deve ser utilizado para requisições assíncronas.
- O `axios` é o único cliente HTTP autorizado e deve ser centralizado.

### Regras de uso:

| Técnica               | Permitido | Observações                                |
|----------------------|-----------|--------------------------------------------|
| useState / useReducer| ❌        | Não permitido para estados globais         |
| React Context        | ❌        | Substituído por slices RTK                 |
| Zustand / Recoil     | ❌        | Não utilizar                               |
| createSlice          | ✅        | Obrigatório para todos os domínios         |
| createAsyncThunk     | ✅        | Usado para chamadas API (com axios)        |

---

## 🗂️ Estrutura de Pastas

```
src/
├── app/
│   ├── store.ts                 # Criação e configuração da Redux Store
│   └── routes.tsx              # Definição de rotas públicas e privadas

├── features/                   # Cada funcionalidade separada por domínio
│   ├── auth/
│   │   ├── components/         # LoginForm, LogoutButton
│   │   ├── pages/              # LoginPage.tsx
│   │   ├── slice.ts            # Slice do RTK para auth
│   │   ├── types.ts            # Tipos de usuário, payload etc.
│   │   └── api.ts              # Chamadas à API (login, logout)

│   ├── boletos/
│   ├── billingGroups/
│   ├── customers/
│   ├── schools/                # Anteriormente chamados de "parceiros"
│   └── users/

├── layout/
│   └── DashboardLayout.tsx     # Layout com sidebar + header

├── widgets/
│   ├── Sidebar/                # Modularizado com seções, colapsáveis etc.
│   └── Header.tsx              # Cabeçalho superior

├── shared/
│   ├── ui/                     # Botões, inputs, componentes genéricos
│   ├── hooks/                  # useAppDispatch, useAppSelector
│   ├── utils/                  # formatações, datas, helpers
│   └── api/
│       └── axios.ts            # Cliente Axios central (com interceptadores)

├── pages/
│   └── NotFound.tsx            # 404

├── App.tsx                     # Monta providers + rotas
└── main.tsx                    # Entry point do app
```

---

## 🔌 API e Axios

- O `axios` é usado via um arquivo central em `shared/api/axios.ts`
- Interceptadores devem ser configurados aqui para:
  - Injetar token JWT (se existir)
  - Interceptar erros globais (401, 500)
- Todas as chamadas API devem ser feitas via funções em `features/<module>/api.ts`

---

## 🧠 Auth com RTK

- Slice: `features/auth/slice.ts`
- Campos: `token`, `user`, `status`, `error`
- AsyncThunk: `loginAsync`, `logoutAsync`
- Token armazenado via `localStorage` e sincronizado com o slice

---

## 🔐 Roteamento

O roteamento é dividido entre:

- **Rotas públicas**: `/login`
- **Rotas protegidas**: `/boletos`, `/users`, etc.

Estrutura típica:

```tsx
isAuthenticated ? (
  <DashboardLayout>
    <PrivateRoutes />
  </DashboardLayout>
) : (
  <Navigate to="/login" />
)
```

---

## 🎨 Estilo e UI

- TailwindCSS é obrigatório
- Cores, fontes e espaçamentos definidos em `theme.ts`
- Estilo baseado no **Horizon UI**:
  - branco + azul
  - sombra interna suave (neomorfismo)
  - fontes sem serifas, tamanho acessível

---

## 🧪 Como adicionar um novo módulo

1. Criar pasta em `features/nome/`
2. Adicionar:
   - `slice.ts`
   - `api.ts`
   - `pages/`
   - `components/`
3. Registrar reducer no `app/store.ts`
4. Adicionar rota no `app/routes.tsx`

---

## ✅ Checklist para novos módulos

- [ ] Criou `slice.ts` com `createSlice`?
- [ ] Criou `createAsyncThunk` para chamadas API?
- [ ] Está usando `axios` central?
- [ ] Usou `useAppDispatch` e `useAppSelector`?
- [ ] Página está registrada na rota privada?
- [ ] O componente está visualmente padronizado?

---

## 🧭 Início da aplicação

```tsx
// main.tsx
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
```

```tsx
// App.tsx
return <AppRoutes />
```

---

## 🧩 Responsabilidades por camada

| Pasta           | Responsabilidade                               |
|----------------|-------------------------------------------------|
| `features/`     | Lógica de negócio por domínio funcional         |
| `widgets/`      | Elementos estruturais (menu, header)            |
| `layout/`       | Layouts com slot (dashboard, público, etc.)     |
| `shared/`       | Recursos genéricos e reutilizáveis              |
| `app/`          | Store Redux e rotas globais                     |

---

