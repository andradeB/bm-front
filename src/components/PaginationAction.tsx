import { Pagination } from '@chakra-ui/react';

export interface PaginationActionProps {
  page: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function PaginationAction({
  page,
  pageSize,
  totalCount,
  onPageChange,
}: PaginationActionProps) {
  return (
    <Pagination.Root
      page={page}
      onPageChange={(d) => onPageChange(d.page)}
      count={totalCount}
      pageSize={pageSize}
      showPageJump
    >
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
      <Pagination.PageText ml="2" />
    </Pagination.Root>
  );
}
