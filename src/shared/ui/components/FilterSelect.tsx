import { useListContext } from "@shared/contexts/ListContext";

export default function FilterSelect() {
  const { filter, setFilter, filters } = useListContext();

  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="h-[50px] px-4 rounded-[16px] border border-gray-200 text-sm"
    >
      {filters.map((f) => (
        <option key={f} value={f}>
          {f}
        </option>
      ))}
    </select>
  );
}
