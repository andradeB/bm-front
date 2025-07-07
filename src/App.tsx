import { RouterProvider } from "react-router";
import { useRouter } from "@routers/useRouter";

export function App() {
  const router = useRouter();
  return <RouterProvider router={router} />;
}
