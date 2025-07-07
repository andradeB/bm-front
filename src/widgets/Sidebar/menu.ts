import {
  FaBuilding,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaUsers,
  FaUser,
} from "react-icons/fa";

export const menu = [
  {
    label: "Regras de Boletos",
    to: "/billing-groups",
    icon: FaFileInvoiceDollar, // documento de regras financeiras
  },
  {
    label: "Boletos",
    to: "/boletos",
    icon: FaCreditCard, // pagamento direto
  },
  {
    label: "Clientes",
    to: "/customers",
    icon: FaUsers, // pessoas
  },
  {
    label: "Provedores de Pagamento",
    to: "/providers",
    icon: FaBuilding, // instituições ou empresas
  },
  {
    label: "Usuários do Sistema",
    to: "/users",
    icon: FaUser, // segurança + usuário
  },
  // {
  //   label: "Logs",
  //   to: "/logs",
  //   icon: FaScroll, // registros e rastreabilidade
  // },
];
