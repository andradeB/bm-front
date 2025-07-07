import { createBrowserRouter, Navigate } from "react-router";
import DashboardLayout from "@layout/DashboardLayout";
import BillingGroupListPage from "@features/billing-group/pages/BillingGroupListPage";
import BillingGroupFormPage from "@features/billing-group/pages/BillingGroupFormPage";

export const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/billing-groups" replace /> }, // redireciona "/"
      {
        path: "billing-groups",
        children: [
          { index: true, element: <BillingGroupListPage /> },
          { path: "novo", element: <BillingGroupFormPage /> },
        ],
      },
      { path: "*", element: <Navigate to="/billing-groups" replace /> }, // redireciona qualquer rota desconhecida
    ],
  },
]);
