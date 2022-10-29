import {useContext} from "react";
import DynamicFormContext from "../contexts/DynamicFormContext";

export function useDynamicFormContext() {
    return useContext(DynamicFormContext);
}

export default useDynamicFormContext;
