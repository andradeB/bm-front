import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useNavigate } from "react-router";
import { loginAsync } from "../slice";
import LoginForm from "../components/LoginForm";
import { Card } from "../../../components/Card.tsx";
import { Typography } from "../../../components/Typography.tsx";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token, status, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate]);

  const handleLogin = (data: { email: string; password: string }) => {
    dispatch(loginAsync(data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <div className="mb-6 text-center">
          <Typography type="heading">Bem-vindo</Typography>
          <Typography type="caption">Acesse sua conta</Typography>
        </div>

        <LoginForm onSubmit={handleLogin} />

        {status === "failed" && error && (
          <Typography type="caption">{error}</Typography>
        )}
      </Card>
    </div>
  );
}
