import {ReactNode} from "react";
import {Button} from "../atoms/Button";
import {box_color, box_variant} from "../types";

export function BodyMainBar({children, actions = []}: BodyMainBarProps) {
    return (
        <div className={'flex justify-between items-center flex-wrap'}>
            <div className={'flex-1'}>
                {children || ''}
            </div>
            <div className={'flex items-center space-x-4 flex-wrap sm:space-x-2 xs:space-x-0'}>
                {actions.map(({color, variant, target, label, icon}) => (
                    <div className={'xs:mt-2 xs:w-full'}>
                        <Button color={color} variant={variant} onClick={target} icon={icon}>{label}</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export interface BodyMainBarProps {
    actions: {color?: box_color, variant?: box_variant, label?: string, target?: Function|string, icon?: string}[],
    children: ReactNode,
}

export default BodyMainBar