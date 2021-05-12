import clsx from "clsx";
import buildStyleKey from "./buildStyleKey";
import {color, variant} from '../types';

export function clsxm({disablable = false, hoverable = false, disabled = false, ...attributes}, {common = {}, nonDisabled = {}, hoverable: hoverableStyles = {}} = {}) {
    const key = buildStyleKey(attributes);
    return clsx(common[key], disablable && !disabled && nonDisabled[key], hoverable && hoverableStyles[key]);
}

export type clsxm_params = {
    disablable?: boolean,
    hoverable?: boolean,
    variant?: variant,
    color?: color,
    disabled?: boolean,
    styles?: {
        common?: any,
        nonDisabled?: any,
        hoverable?: any,
    },
}

export default clsxm