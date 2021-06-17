import {Icon, Text} from "../atoms";
import {box_color, icon} from "../types";
import clsx from "clsx";
import boxClass from "../utils/boxClass";

export function Kpi({icon, name, quantity, color}: KpiProps) {
    return (
        <div className={'flex items-center space-x-6'}>
            <div className={clsx(boxClass({color}))}>
                <Icon icon={icon} />
            </div>
            {quantity && (
                <div>
                    <Text text={name} variant={'description'} color={color} />
                    <Text text={`${quantity}`} variant={'title5'} color={color} />
                </div>
            )}
        </div>
    );
}

export interface KpiProps {
    icon?: icon,
    name?: string,
    quantity?: number,
    color?: box_color,
}

export default Kpi