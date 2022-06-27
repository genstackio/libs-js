import UrlField, {UrlFieldProps} from "./UrlField";

export function DonationUrlField(props: DonationUrlFieldProps) {
    return <UrlField kind={'donationUrl'} {...props} />
}

export interface DonationUrlFieldProps extends UrlFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default DonationUrlField;
