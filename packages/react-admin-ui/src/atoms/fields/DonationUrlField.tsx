import UrlField, { UrlFieldProps } from './UrlField';

export function DonationUrlField(props: DonationUrlFieldProps) {
    return <UrlField kind={'donationUrl'} {...props} />;
}

export type DonationUrlFieldProps = UrlFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DonationUrlField;
