import SwitchField, { SwitchFieldProps } from './SwitchField';

export function DraftField(props: DraftFieldProps) {
    return <SwitchField kind={'draft'} {...props} />;
}

export type DraftFieldProps = SwitchFieldProps;

// noinspection JSUnusedGlobalSymbols
export default DraftField;
