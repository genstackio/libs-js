import {class_name} from '../types';
import {box_color} from "../mappings/box-colors";
import clsx from "clsx";
import boxClass from "../utils/boxClass";
import {box_variant} from "../mappings/box-variants";

export function Divider({className, color, variant='outlined' }: DividerProps) {
    return (
        <hr className={clsx(boxClass({ color, variant }), className)} />
    );
}

export interface DividerProps {
    className?: class_name;
    color?: box_color;
    variant?: box_variant;
}

export default Divider;
