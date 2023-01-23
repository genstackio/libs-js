import SwitchField, { SwitchFieldProps } from './SwitchField';

export function AutoStartField(props: AutoStartFieldProps) {
    return <SwitchField kind={'autoStart'} {...props} />;
}

export type AutoStartFieldProps = SwitchFieldProps;

// noinspection JSUnusedGlobalSymbols
export default AutoStartField;
