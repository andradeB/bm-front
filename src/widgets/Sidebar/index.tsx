import { menu } from "./menu";
import Item from "@widgets/Sidebar/Item";
import { useAppDispatch } from "@shared/hooks";
import { logout } from "@features/auth/slice";
import { Button } from "@components/Button"; // ajuste o caminho se necessário

export default function Sidebar() {
  const dispatch = useAppDispatch();

  return (
    <aside className="bg-white h-screen w-[290px] shadow-md px-6 py-8 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-indigo-600 mb-20">BM-Admin</h1>

        <div className="my-2">
          {menu.map((item) => (
            <Item key={item.to} {...item} icon={item.icon!} />
          ))}
        </div>
      </div>

      <Button
        variant="danger"
        mode={"outlined"}
        onClick={() => dispatch(logout())}
      >
        Sair
      </Button>
    </aside>
  );
}
