import { useLocation } from "react-router-dom";

const routeMap: Record<string, { title: string; breadcrumb: string }> = {
  "/": {
    title: "Home",
    breadcrumb: "Página inicial",
  },
  "/boletos": {
    title: "Boletos",
    breadcrumb: "Financeiro / Boletos",
  },
  "/dashboard": {
    title: "Dashboard",
    breadcrumb: "Pages / Dashboard",
  },
};

export function usePageMetadata() {
  const { pathname } = useLocation();
  return (
    routeMap[pathname] ?? {
      title: "Página",
      breadcrumb: "Sistema",
    }
  );
}
