import SwitchField, { SwitchFieldProps } from './SwitchField';

export function FeaturedField(props: FeaturedFieldProps) {
    return <SwitchField kind={'featured'} {...props} />;
}

export type FeaturedFieldProps = SwitchFieldProps;

// noinspection JSUnusedGlobalSymbols
export default FeaturedField;
