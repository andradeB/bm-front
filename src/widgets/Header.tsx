import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type EscolaInfo = {
  nome: string;
  contato: string;
  cnpj: string;
  agencia: string;
  conta: string;
};

type HeaderProps = {
  pageTitle: string;
  breadcrumb: string;
  escola: EscolaInfo;
};

export default function Header({ pageTitle, breadcrumb, escola }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full flex justify-between items-center mb-6">
      {/* Título e breadcrumb */}
      <div>
        <p className="text-sm text-gray-500 font-medium leading-5">
          {breadcrumb}
        </p>
        <h1 className="text-2xl text-blue-700 font-semibold leading-7">
          {pageTitle}
        </h1>
      </div>

      {/* Nome da escola e dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 font-medium text-sm leading-5 rounded-2xl shadow-md hover:bg-gray-50 transition-all"
        >
          {escola.nome}
          {open ? (
            <FaChevronUp className="text-gray-400 text-xs" />
          ) : (
            <FaChevronDown className="text-gray-400 text-xs" />
          )}
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl p-5 z-50 space-y-2">
            <InfoRow label="Contato" value={escola.contato} />
            <InfoRow label="CNPJ" value={escola.cnpj} />
            <InfoRow label="Agência" value={escola.agencia} />
            <InfoRow label="Conta" value={escola.conta} />
          </div>
        )}
      </div>
    </header>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm text-gray-700 leading-5">
      <span className="font-semibold text-gray-600">{label}:</span>{" "}
      <span>{value}</span>
    </p>
  );
}
