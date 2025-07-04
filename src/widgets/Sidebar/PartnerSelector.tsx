import { useState } from "react";
import { FaUserTie } from "react-icons/fa";

type School = {
  id: string;
  name: string;
};

type PartnerSelectorProps = {
  schools: School[];
};

export default function PartnerSelector({ schools }: PartnerSelectorProps) {
  const [selectedSchool, setSelectedSchool] = useState(
    schools.length > 0 ? schools[0].id : "",
  );

  return (
    <div className="mt-6">
      <div className="text-[0.7rem] uppercase text-gray-400 font-semibold mb-1 pl-2 tracking-wide">
        Escola ativa
      </div>
      <div
        className="relative flex items-center bg-white rounded-xl shadow-[inset_3px_3px_6px_#dbeafe,inset_-3px_-3px_6px_#ffffff]
        px-3 py-2 text-sm text-gray-600 transition focus-within:ring-2 focus-within:ring-blue-500"
      >
        <FaUserTie className="text-blue-500 mr-2" />
        <select
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
          className="bg-transparent w-full focus:outline-none appearance-none pr-6"
        >
          {schools.map((school) => (
            <option key={school.id} value={school.id}>
              {school.name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
          ▼
        </div>
      </div>
    </div>
  );
}
