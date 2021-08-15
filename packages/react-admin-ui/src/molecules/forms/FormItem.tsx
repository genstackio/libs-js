import EmailField from '../../atoms/fields/EmailField';
import LastNameField from '../../atoms/fields/LastNameField';
import FirstNameField from '../../atoms/fields/FirstNameField';
import PasswordField from '../../atoms/fields/PasswordField';
import FormRow from './FormRow';
import { form_item } from '../../types';
import { AsComponent } from '../../as';

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

export interface FormItemProps extends AsComponent {
    definition: form_item;
}

// noinspection JSUnusedGlobalSymbols
export default FormItem;
