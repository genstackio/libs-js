import SwitchField, { SwitchFieldProps } from './SwitchField';

export function AutoDeleteField(props: AutoDeleteFieldProps) {
    return <SwitchField kind={'autoDelete'} {...props} />;
}

export type AutoDeleteFieldProps = SwitchFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AutoDeleteField;
