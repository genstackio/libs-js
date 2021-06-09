import {box_color} from "../types";
import {Breadcrumb} from "../molecules";

export function ScreenHeader({color = 'primary', items = []}: ScreenHeaderProps) {
    const title = items.slice(items.length - 1)[0].label;
    return (
        <div className={'flex justify-between items-center'}>
            <div className={'text-2xl font-semibold'}>{title}</div>
            <Breadcrumb items={items} color={color} toRight />
        </div>
    );
}

export interface ScreenHeaderProps {
    color?: box_color,
    items: {
        label?: string,
        target?: string
    }[],
}

export default ScreenHeader