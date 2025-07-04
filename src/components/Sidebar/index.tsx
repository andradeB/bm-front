import Section from "./Section";
import { menu } from "./menu";
import PartnerSelector from "../PartnerSelector";

const schools = [
  { id: "1", name: "Escola XPTO" },
  { id: "2", name: "Escola Alpha" },
  { id: "3", name: "Escola Beta" },
];

export default function Sidebar() {
  return (
    <aside className="bg-white h-screen w-[290px] shadow-md px-6 py-8 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-indigo-600 mb-8">BM-Admin</h1>

        {menu.map((section) => (
          <Section key={section.label} {...section} />
        ))}
      </div>

      <PartnerSelector schools={schools} />
    </aside>
  );
}
