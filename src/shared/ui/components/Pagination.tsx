import { Button } from "@components/Button";
import { useListContext } from "@shared/contexts/ListContext";

interface PaginationProps {
  total: number;
  pageSize?: number;
}

export default function Pagination({ total, pageSize = 10 }: PaginationProps) {
  const { page, setPage, apply } = useListContext();
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const goTo = (p: number) => {
    setPage(p);
    apply();
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <Button
        onClick={() => goTo(page - 1)}
        disabled={page <= 1}
        className="w-auto px-4"
        mode="outlined"
      >
        Anterior
      </Button>
      <span className="text-sm text-gray-600">
        {page} / {totalPages}
      </span>
      <Button
        onClick={() => goTo(page + 1)}
        disabled={page >= totalPages}
        className="w-auto px-4"
        mode="outlined"
      >
        Próxima
      </Button>
    </div>
  );
}
