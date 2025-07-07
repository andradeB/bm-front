import { useMemo } from "react";
import { useAppSelector } from "@shared/hooks";
import { publicRouter } from "./publicRouter";
import { privateRouter } from "./privateRouter";

export function useRouter() {
  const token = useAppSelector((state) => state.auth.token);

  const router = useMemo(() => {
    return token ? privateRouter : publicRouter;
  }, [token]);

  return router;
}
