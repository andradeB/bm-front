import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/partners", label: "Parceiros" },
  { path: "/boletos", label: "Boletos" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-xl font-bold mb-6">Boleto Manager</h2>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `block px-3 py-2 rounded hover:bg-slate-700 ${isActive ? "bg-slate-700" : ""}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}
