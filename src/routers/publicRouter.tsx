import { createBrowserRouter, Navigate } from "react-router";
import LoginPage from "@features/auth/pages/LoginPage";

export const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
