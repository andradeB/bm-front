import { Outlet } from "react-router-dom";
import Sidebar from "../widgets/Sidebar";
import Header from "../widgets/Header";
import { usePageMetadata } from "../shared/hooks/usePageMetadata.ts";

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
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="p-6">
          <Header pageTitle={title} breadcrumb={breadcrumb} escola={escola} />
        </div>
        <main className="flex-1 overflow-y-auto p-6 pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
