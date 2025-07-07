import { Outlet } from "react-router";
import Sidebar from "@widgets/Sidebar";
import Header from "@widgets/Header";
import { usePageMetadata } from "@shared/hooks/usePageMetadata.ts";

export default function DashboardLayout() {
  const { title, breadcrumb } = usePageMetadata();

  const escola = {
    nome: "Escola Cuidar Bem",
    contato: "(24) 99941-3202",
    cnpj: "12.345.678/0001-90",
    agencia: "1234",
    conta: "56789-0",
  };

  return (
    <div className="flex h-screen bg-[#f4f7fe]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="h-20 px-6 py-4">
          <Header pageTitle={title} breadcrumb={breadcrumb} escola={escola} />
        </div>
        <main className="flex-1 px-6 pb-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
