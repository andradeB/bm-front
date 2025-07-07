import { NavLink } from "react-router";

type ItemProps = {
  label: string;
  to: string;
  icon: React.ElementType;
};

export default function Item({ label, to, icon: Icon }: ItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 px-4 py-4 rounded-lg w-full text-sm font-medium transition ${
          isActive
            ? "bg-indigo-100 text-indigo-600 shadow-inner"
            : "text-gray-400 hover:text-indigo-500 hover:bg-gray-100"
        }`
      }
    >
      {Icon && <Icon className="text-lg" />}
      {label}
    </NavLink>
  );
}
