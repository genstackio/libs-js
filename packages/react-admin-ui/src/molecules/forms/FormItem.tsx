import EmailField from '../../atoms/fields/EmailField';
import LastNameField from '../../atoms/fields/LastNameField';
import FirstNameField from '../../atoms/fields/FirstNameField';
import PasswordField from '../../atoms/fields/PasswordField';
import { form_item } from '../../types';
import FormRow from './FormRow';
import { WithClassName } from '../../withs';

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

export interface FormItemProps extends WithClassName {
    definition: form_item;
}

export default FormItem;
