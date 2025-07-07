import type { AsyncThunk } from "@reduxjs/toolkit";
import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAppDispatch } from "@shared/hooks";

export interface ListContextType {
  search: string;
  setSearch: (v: string) => void;
  filter: string;
  setFilter: (v: string) => void;
  page: number;
  setPage: (v: number) => void;
  apply: () => void;
  filters: string[];
}

interface ListProviderProps {
  thunk: AsyncThunk<any, { search: string; filter: string; page: number }, any>;
  filters: string[];
  defaultFilter: string;
  children: ReactNode;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export function ListProvider({
  thunk,
  filters,
  defaultFilter,
  children,
}: ListProviderProps) {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(defaultFilter);
  const [page, setPage] = useState(1);

  const apply = useCallback(() => {
    dispatch(thunk({ search, filter, page }));
  }, [dispatch, thunk, search, filter, page]);

  useEffect(() => {
    apply();
  }, []);

  return (
    <ListContext.Provider
      value={{
        search,
        setSearch,
        filter,
        setFilter,
        page,
        setPage,
        apply,
        filters,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export function useListContext() {
  const ctx = useContext(ListContext);
  if (!ctx) throw new Error("useListContext must be inside ListProvider");
  return ctx;
}
