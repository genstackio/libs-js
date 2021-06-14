import clsx from "clsx";
import {clsxm_params} from "./clsxm";
import borderClass from "./borderClass";
import bgClass from "./bgClass";
import textClass from "./textClass";

export const buttonClass = (params: clsxm_params) => {
    params = {hoverable: true, disablable: true, ...params};
    return clsx(
        bgClass(params),
        borderClass(params),
        textClass(params)
    );
}

export default buttonClass