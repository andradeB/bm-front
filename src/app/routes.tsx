import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Boletos from '../pages/Boletos';
import DashboardLayout from '../layout/DashboardLayout';
import LoginPage from '../features/auth/pages/LoginPage';
import { useAppSelector } from '../shared/hooks';

export default function AppRoutes() {
  const token = useAppSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {token ? (
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/boletos" element={<Boletos />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}
