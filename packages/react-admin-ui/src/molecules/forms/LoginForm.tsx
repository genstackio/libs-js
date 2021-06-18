import {Form, UsernameField, PasswordField} from "../../atoms";

import { SubmitHandler } from "react-hook-form";

type Inputs = {
    username: string,
    password: string,
    mobile: string,
};

export function LoginForm() {
    const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data, null, 4));
    const defaults = {};
    return (
        <Form onSubmit={onSubmit} defaultValues={defaults}>
            <UsernameField field required autoFocus />
            <PasswordField field required />
            <input type="submit" />
        </Form>
    );
}

export default LoginForm