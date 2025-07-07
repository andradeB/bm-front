import { ListProvider } from "@shared/contexts";
import { ListPageWrapper } from "@shared/ui/pages";
import { DataTable, Pagination } from "@shared/ui/components";
import { useAppSelector } from "@shared/hooks";
import { fetchBillingGroups } from "../slice";

const columns = [{ header: "Descrição", accessor: "descricao" }];

export default function BillingGroupListPage() {
  const { items, total, loading } = useAppSelector((state) => state.billingGroup);

  return (
    <ListProvider
      thunk={fetchBillingGroups}
      filters={["descricao", "vencimento"]}
      defaultFilter="descricao"
    >
      <ListPageWrapper
        table={<DataTable columns={columns} data={items} loading={loading} />}
        pagination={<Pagination total={total} />}
      />
    </ListProvider>
  );
}
