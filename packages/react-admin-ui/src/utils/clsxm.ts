import clsx from "clsx";
import buildStyleKey from "./buildStyleKey";

export function clsxm({disablable = false, hoverable = false, disabled = false, ...attributes}, {common = {}, nonDisabled = {}, hoverable: hoverableStyles = {}} = {}) {
    const key = buildStyleKey(attributes);
    return clsx(common[key], disablable && !disabled && nonDisabled[key], hoverable && hoverableStyles[key]);
}

export default clsxm