import {UsernameField, PasswordField} from "../../atoms";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string,
    password: string,
    mobile: string,
};

export function LoginForm() {
    const { register, handleSubmit, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data, null, 4));
    const defaults = {};
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <UsernameField register={register} defaults={defaults} errors={errors} required autoFocus />
            <PasswordField register={register} defaults={defaults} errors={errors} required />
            <input type="submit" />
        </form>
    );
}

export default LoginForm