import useForm from '../../hooks/useForm';
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

export function OrganizationForm({children, ...props}: OrganizationFormProps) {
    const { Form, SubmitButton, field } = useForm(props, 'organization');

    return (
        <Form customChildren={children}>
            <LastNameField {...field} required autoFocus />
            <FieldGroup>
                <AddressField {...field} required half />
                <AdditionalAddressField {...field} required half />
            </FieldGroup>
            <FieldGroup>
                <CityField {...field} required half />
                <ZipCodeField {...field} required half />
            </FieldGroup>
            <FieldGroup>
                <PhoneField {...field} required half />
                <EmailField {...field} required half />
            </FieldGroup>
            <UrlField {...field} required />
            <SubmitButton />
        </Form>
    );
}

export type OrganizationFormProps = BaseFormProps;

// noinspection JSUnusedGlobalSymbols
export default OrganizationForm;
