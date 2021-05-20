import {box_color} from "../types";
import {Breadcrumb} from "../molecules";

export function ScreenHeader({items = [], color = 'primary'}: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={'flex justify-between items-center'}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps {
    items: {label?: string, target?: string}[],
    color?: box_color,
}

export default ScreenHeader