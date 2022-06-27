import SwitchField, {SwitchFieldProps} from "./SwitchField";

export function FeaturedField(props: FeaturedFieldProps) {
    return <SwitchField kind={'featured'} {...props} />
}

export interface FeaturedFieldProps extends SwitchFieldProps {
}

// noinspection JSUnusedGlobalSymbols
export default FeaturedField;
