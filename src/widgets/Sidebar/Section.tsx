import Item from "./Item";
import CollapsibleItem from "./CollapsibleItem";

type SectionProps = {
  label: string;
  items?: {
    label: string;
    to: string;
    icon?: React.ElementType;
  }[];
  collapsible?: boolean;
  icon?: React.ElementType;
};

export default function Section({
  label,
  items = [],
  collapsible = false,
  icon,
}: SectionProps) {
  return (
    <div className="my-2">
      {/*<div className="text-[0.7rem] uppercase text-gray-400 font-semibold mb-2 tracking-wide px-2">*/}
      {/*  {label}*/}
      {/*</div>*/}
      {/*<nav className="space-y-1">*/}
      {collapsible && icon ? (
        <CollapsibleItem label={label} icon={icon} items={items} />
      ) : (
        items.map((item) => <Item key={item.to} {...item} icon={item.icon!} />)
      )}
      {/*</nav>*/}
    </div>
  );
}
