import clsx from "clsx";
import {clsxm_params} from "./clsxm";
import borderClass from "./borderClass";
import bgClass from "./bgClass";
import textClass from "./textClass";

export const boxClass = (params: clsxm_params) => clsx(
    bgClass(params),
    borderClass(params),
    textClass(params)
);

export default boxClass