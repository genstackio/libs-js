import EmailField from '../../atoms/fields/EmailField';
import FirstNameField from '../../atoms/fields/FirstNameField';
import LastNameField from '../../atoms/fields/LastNameField';
import PhoneField from '../../atoms/fields/PhoneField';
import AddressField from '../../atoms/fields/AddressField';
import BirthDateField from '../../atoms/fields/BirthDateField';
import GenderField from '../../atoms/fields/GenderField';
import useForm from '../../hooks/useForm';
import { BaseFormProps } from './BaseForm';

export function UserProfileForm({children, ...props}: UserProfileFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'user_profile');

    return (
        <Form customChildren={children}>
            <LastNameField {...field} autoFocus />
            <FirstNameField {...field} />
            <EmailField {...field} />
            <AddressField {...field} />
            <PhoneField {...field} />
            <BirthDateField {...field} />
            <GenderField {...field} />
            <SubmitButton />
        </Form>
    );
}

export type UserProfileFormProps = BaseFormProps;

export default UserProfileForm;
