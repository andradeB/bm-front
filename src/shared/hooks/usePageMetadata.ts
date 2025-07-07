import { useLocation } from "react-router";
import { menu } from "@widgets/Sidebar/menu"; // ajuste o path conforme sua estrutura

export function usePageMetadata() {
  const { pathname } = useLocation();

  const current = menu.find((item) => item.to === pathname);

  return {
    title: current?.label ?? "Página",
    breadcrumb: current ? `Sistema / ${current.label}` : "Sistema",
  };
}
