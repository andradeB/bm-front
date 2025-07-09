import { Table, IconButton } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

export interface DataTableOption {
  key: string;
  label: string;
}

export interface DataTableProps {
  data: Array<Record<string, unknown>>;
  options: DataTableOption[];
  onRowClick: (id: string) => void;
  onDelete: (id: string) => void;
  selectedRows?: string[];
  onPageChange?: (page: number) => void;
  page: number;
  pageSize: number;
  totalCount: number;
}

export default function DataTable({
  data,
  options,
  onRowClick,
  onDelete,
}: DataTableProps) {
  return (
    <Table.Root variant="simple">
      <Table.Header>
        <Table.Row>
          {options.map((opt) => (
            <Table.HeaderCell key={opt.key}>{opt.label}</Table.HeaderCell>
          ))}
          <Table.HeaderCell>Ações</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => (
          <Table.Row
            key={row.id}
            cursor="pointer"
            _hover={{ bg: 'gray.50' }}
            onClick={() => onRowClick(row.id)}
          >
            {options.map((opt) => (
              <Table.Cell key={opt.key}>{row[opt.key]}</Table.Cell>
            ))}
            <Table.Cell>
              <IconButton
                aria-label="Excluir"
                icon={<FiTrash2 />}
                size="sm"
                colorScheme="red"
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Confirma a exclusão?')) {
                    onDelete(row.id);
                  }
                }}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
