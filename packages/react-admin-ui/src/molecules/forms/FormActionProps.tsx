import {ComponentType} from "react";

export interface FormActionProps {
    onSuccess?: Function;
    prepare?: Function;
    component?: ComponentType<any>;
}

export default FormActionProps;
