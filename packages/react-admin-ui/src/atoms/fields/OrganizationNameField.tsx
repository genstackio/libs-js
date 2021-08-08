import NameField, { NameFieldProps } from './NameField';

export function OrganizationNameField(props: OrganizationNameFieldProps) {
    return <NameField kind={'organizationName'} {...props} />;
}

export type OrganizationNameFieldProps = NameFieldProps;

// noinspection JSUnusedGlobalSymbols
export default OrganizationNameField;
