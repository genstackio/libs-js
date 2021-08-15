import FieldGroup from '../../atoms/FieldGroup';
import LastNameField from '../../atoms/fields/LastNameField';
import CityField from '../../atoms/fields/CityField';
import AddressField from '../../atoms/fields/AddressField';
import AdditionalAddressField from '../../atoms/fields/AdditionalAddressField';
import ZipCodeField from '../../atoms/fields/ZipCodeField';
import PhoneField from '../../atoms/fields/PhoneField';
import EmailField from '../../atoms/fields/EmailField';
import UrlField from '../../atoms/fields/UrlField';
import { BaseFormProps } from './BaseForm';
import useForm from '../../hooks/useForm';

export function OrganizationForm({ children, ...props }: OrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'organization');

    return (
        <Form customChildren={children}>
            <LastNameField {...field} autoFocus required />
            <FieldGroup>
                <AddressField {...field} half required />
                <AdditionalAddressField {...field} half required />
            </FieldGroup>
            <FieldGroup>
                <CityField {...field} half required />
                <ZipCodeField {...field} half required />
            </FieldGroup>
            <FieldGroup>
                <PhoneField {...field} half required />
                <EmailField {...field} half required />
            </FieldGroup>
            <UrlField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type OrganizationFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default OrganizationForm;
