import {
  FaUsers,
  FaBuilding,
  FaFileInvoiceDollar,
  FaCreditCard,
  FaCogs,
} from "react-icons/fa";

export const menu = [
  {
    label: "Cobrança",
    items: [
      {
        label: "Regras de Boletos",
        to: "/billing-groups",
        icon: FaFileInvoiceDollar,
      },
      { label: "Boletos", to: "/boletos", icon: FaCreditCard },
    ],
  },
  {
    label: "Clientes",
    items: [{ label: "Clientes", to: "/customers", icon: FaUsers }],
  },
  {
    label: "Integrações",
    items: [
      { label: "Provedores de Pagamento", to: "/providers", icon: FaBuilding },
    ],
  },
  {
    label: "Administração",
    collapsible: true,
    icon: FaCogs,
    items: [
      { label: "Usuários do Sistema", to: "/users" },
      { label: "Logs", to: "/logs" },
    ],
  },
];
