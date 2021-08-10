import useForm from '../../../hooks/useForm';
import EmailField from '../../../atoms/fields/EmailField';
import LastNameField from '../../../atoms/fields/LastNameField';
import FirstNameField from '../../../atoms/fields/FirstNameField';
import PasswordField from '../../../atoms/fields/PasswordField';
import { BaseFormProps } from '../BaseForm';
import RoleField from '../../../atoms/fields/RoleField';
import { user_role } from '../../../types';

export function CreateUserForm({ children, roles, ...props }: CreateUserFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'create_user');

    return (
        <Form customChildren={children}>
            <EmailField {...field} required autoFocus />
            <LastNameField {...field} required />
            <FirstNameField {...field} required />
            <PasswordField {...field} required />
            <RoleField {...field} roles={roles} required />
            <SubmitButton />
        </Form>
    );
}

export interface CreateUserFormProps extends BaseFormProps {
    roles?: user_role[];
}

// noinspection JSUnusedGlobalSymbols
export default CreateUserForm;
