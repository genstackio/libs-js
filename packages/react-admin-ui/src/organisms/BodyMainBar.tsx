import {ReactNode} from "react";
import {Button} from "../atoms/Button";
import {box_color, box_variant, target} from "../types";

export function BodyMainBar({actions = [], children}: BodyMainBarProps) {
    return (
        <div className={'flex justify-between items-center flex-wrap'}>
            <div className={'flex-1'}>
                {children || ''}
            </div>
            <div className={'x-buttons'}>
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
    actions: {
        color?: box_color,
        icon?: string,
        label?: string,
        target?: target,
        variant?: box_variant,
    }[],
    children: ReactNode,
}

export default BodyMainBar