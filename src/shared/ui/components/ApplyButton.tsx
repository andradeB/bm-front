import { Button } from "@components/Button";
import { useListContext } from "@shared/contexts/ListContext";

export default function ApplyButton() {
  const { apply } = useListContext();

  return (
    <Button onClick={apply} className="w-auto px-6">
      Buscar
    </Button>
  );
}
