import EmailField from '../../atoms/fields/EmailField';
import LastNameField from '../../atoms/fields/LastNameField';
import FirstNameField from '../../atoms/fields/FirstNameField';
import PasswordField from '../../atoms/fields/PasswordField';
import { class_name, form_item } from '../../types';
import FormRow from './FormRow';

const types = {
    email: EmailField,
    lastName: LastNameField,
    firstName: FirstNameField,
    password: PasswordField,
    row: FormRow,
};

export function FormItem({ definition, ...props }: FormItemProps) {
    const { type, field, ...extra } = definition;
    const Component = types[field || type];
    return <Component {...extra} {...props} />;
}

export interface FormItemProps {
    definition: form_item;
    className?: class_name;
}

export default FormItem;
