import RegisterForm, {RegisterFormProps} from "../forms/RegisterForm";
import useAction from "../../hooks/useAction";

export function RegisterAction(props: RegisterActionProps) {
    const state = useAction('REGISTER');
    return (
        <RegisterForm {...state} {...props} />
    )
}
export interface RegisterActionProps extends RegisterFormProps {}

export default RegisterAction
