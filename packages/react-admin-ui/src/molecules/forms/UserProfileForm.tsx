import {EmailField, FirstNameField, LastNameField, PhoneField, AddressField, BirthDateField, GenderField} from '../../atoms/fields';
import {useForm} from '../../hooks/useForm';
import {BaseFormProps} from "./BaseForm";

export function UserProfileForm(props : UserProfileFormProps) {
    const {Form, SubmitButton, field} = useForm(props, 'user_profile');

    return (
        <Form>
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

export interface UserProfileFormProps extends BaseFormProps {}

export default UserProfileForm
