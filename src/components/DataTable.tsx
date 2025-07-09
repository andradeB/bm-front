import { Table, IconButton } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

export interface DataTableOption {
  key: string;
  columName: string;
}

export interface DataTableProps<T extends Record<string, string>> {
  data: Array<T>;
  options: DataTableOption[];
  keyExtractor: (item: T) => string;
  onRowClick: (id: string) => void;
  onDelete: (id: string) => void;
  selectedRows?: string[];
  onPageChange?: (page: number) => void;
  page: number;
  pageSize: number;
  totalCount: number;
}

export default function DataTable<T extends Record<string, string>>({
  data,
  options,
  keyExtractor,
  onRowClick,
  onDelete,
}: DataTableProps<T>) {
  return (
    <Table.Root variant="line">
      <Table.Header>
        <Table.Row>
          {options.map((opt) => (
            <Table.ColumnHeader key={opt.key}>{opt.columName}</Table.ColumnHeader>
          ))}
          <Table.ColumnHeader>Ações</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => {
          const id = keyExtractor(row);
          return (
            <Table.Row
              key={id}
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
              onClick={() => onRowClick(id)}
            >
              {options.map((opt) => (
                <Table.Cell key={`${id}-${row[opt.key]}`}>{row[opt.key]}</Table.Cell>
              ))}
            <Table.Cell>
              <IconButton
                aria-label="Excluir"
                size="sm"
                colorScheme="red"
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Confirma a exclusão?')) {
                    onDelete(id);
                  }
                }}
              >
                <FiTrash2 />
              </IconButton>
            </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
}
