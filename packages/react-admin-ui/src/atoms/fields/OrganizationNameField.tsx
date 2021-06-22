import NameField, {NameFieldProps} from "./NameField";

export function OrganizationNameField(props: OrganizationNameFieldProps) {
    return (
        <NameField kind={'organizationName'} {...props} />
    );
}

export interface OrganizationNameFieldProps extends NameFieldProps {}

export default OrganizationNameField
