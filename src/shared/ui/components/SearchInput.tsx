import { Input } from "@components/Input";
import { useListContext } from "@shared/contexts/ListContext";

export default function SearchInput() {
  const { search, setSearch } = useListContext();

  return (
    <Input
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-60"
    />
  );
}
