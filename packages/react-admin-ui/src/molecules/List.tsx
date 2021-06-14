import Badge from '../atoms/Badge';
import clsx from "clsx";
import {badge, box_color} from "../types";
import boxClass from "../utils/boxClass";

export function List({badge, color, items=[]}: ListProps) {
    return (
        <div>
            <ul className={'px-0'}>
            {items.map((item, index) => (
                <li
                key={index}
                className={clsx(
                    boxClass({color: item.color || color, variant: 'contained'}),
                    'border list-none rounded-sm px-3 py-3 flex justify-between')}>
                            {item.text}
                    {(item.badge || badge)  && <Badge
                        variant={item.badge?.variant || badge?.variant}
                        color={item.badge?.color || badge?.color}
                        text={item.badge?.text || badge?.label} />
                    }
                </li>
            ))}
            </ul>
        </div>
    );
}

export interface ListProps {
    badge?: badge,
    color?: box_color,
    items?: any[],
}

export default List
