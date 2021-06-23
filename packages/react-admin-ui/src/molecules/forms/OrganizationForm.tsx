import {useForm} from '../../hooks/useForm';
import {FieldGroup, LastNameField, CityField, AddressField, AdditionalAddressField, ZipCodeField, PhoneField, EmailField, UrlField} from "../../atoms";
import {BaseFormProps} from "./BaseForm";

export function OrganizationForm(props: OrganizationFormProps) {
    const {Form, SubmitButton, field} = useForm(props, 'organization');

    return (
        <Form>
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

export interface OrganizationFormProps extends BaseFormProps {
}

export default OrganizationForm
