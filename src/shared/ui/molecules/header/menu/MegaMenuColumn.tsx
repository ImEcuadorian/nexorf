import MegaMenuItem, {MegaMenuItemProps} from "@/shared/ui/atoms/header/menu/MegaMenuItem";

type MegaMenuColumnProps = {
    items: MegaMenuItemProps[];
};

const MegaMenuColumn = ({items}: MegaMenuColumnProps) => {
    return (
        <div className="space-y-2">
            {items.map((item) => (
                <MegaMenuItem key={item.title} {...item} />
            ))}
        </div>
    );
}

export default MegaMenuColumn;