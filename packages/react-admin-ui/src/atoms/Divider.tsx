import {box_color} from "../mappings/box-colors";
import clsx from "clsx";
import buttonClass from "../utils/buttonClass";
import {box_variant} from "../mappings/box-variants";

export function Divider({color, variant='outlined' }: DividerProps) {
    return (
        <hr className={clsx(buttonClass({ color, variant }))} />
    );
}

export interface DividerProps {
    color?: box_color;
    variant?: box_variant,
}

export default Divider;
