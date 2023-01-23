// noinspection JSUnusedGlobalSymbols

import TextareaField, { TextareaFieldProps } from './TextareaField';

export function WarningField(props: WarningFieldProps) {
    return <TextareaField kind={'warning'} {...props} />;
}

export type WarningFieldProps = TextareaFieldProps;

export default WarningField;
