import { Table } from "@components/Table";
import type { ReactNode } from "react";

interface Column<T> {
  header: string;
  accessor: keyof T | string;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
}

export default function DataTable<T>({
  columns,
  data,
  loading,
}: DataTableProps<T>) {
  if (loading) return <div>Carregando...</div>;
  if (!data?.length) return <div>Nenhum resultado</div>;

  return (
    <Table className="min-w-full" striped>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.header} className="px-4 py-2 text-left">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={String(col.accessor)} className="px-4 py-2">
                {col.render ? col.render(row) : (row as any)[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
