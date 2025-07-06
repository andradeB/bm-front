import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      password: Yup.string()
        .min(6, "Senha muito curta")
        .required("Senha é obrigatória"),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <Input
        name="email"
        type="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.email && !!formik.touched.email}
      />

      <Input
        name="password"
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={!!formik.errors.password && !!formik.touched.password}
      />

      <Button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? "Carregando…" : "Entrar"}
      </Button>
    </form>
  );
}
