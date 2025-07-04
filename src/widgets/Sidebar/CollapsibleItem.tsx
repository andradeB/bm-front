import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

type SubItem = {
  label: string;
  to: string;
};

type CollapsibleItemProps = {
  label: string;
  icon: React.ElementType;
  items: SubItem[];
};

export default function CollapsibleItem({
  label,
  icon: Icon,
  items,
}: CollapsibleItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-4 py-2 rounded-lg w-full text-sm font-medium transition text-gray-400 hover:text-indigo-500 hover:bg-gray-100"
      >
        <div className="flex items-center gap-4">
          <Icon className="text-lg" />
          {label}
        </div>
        <FaChevronDown
          className={`text-xs transform transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pl-10 mt-1 space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block text-sm rounded-md px-2 py-1 transition ${
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-400 hover:text-indigo-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
