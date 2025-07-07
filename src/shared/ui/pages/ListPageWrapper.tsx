import { ReactNode } from "react";
import SearchInput from "../components/SearchInput";
import FilterSelect from "../components/FilterSelect";
import ApplyButton from "../components/ApplyButton";

export interface ListPageWrapperProps {
  table: ReactNode;
  pagination: ReactNode;
}

export default function ListPageWrapper({ table, pagination }: ListPageWrapperProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-end gap-2 mb-4">
        <SearchInput />
        <FilterSelect />
        <ApplyButton />
      </div>
      <div className="flex-1 overflow-y-auto">{table}</div>
      <div className="mt-4">{pagination}</div>
    </div>
  );
}
