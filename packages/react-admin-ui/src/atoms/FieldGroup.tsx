import Row from './Row';
import { AsWrapper } from '../as';

export function FieldGroup(props: FieldGroupProps) {
    return <Row spaced={4} {...props} />;
}

export type FieldGroupProps = AsWrapper;

// noinspection JSUnusedGlobalSymbols
export default FieldGroup;
