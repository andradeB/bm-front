import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import { useAppSelector } from "../shared/hooks";

export default function AppRoutes() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Routes>
      {token ? (
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<h1>HOME</h1>} />
          {/*<Route path="/" element={<Navigate to="/dashboard" />} />*/}
          <Route path="/dashboard" element={<div></div>} />
          {/*<Route path="/boletos" element={<Boletos />} />*/}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <Route path="*" element={<LoginPage />} />
      )}
    </Routes>
  );
}
