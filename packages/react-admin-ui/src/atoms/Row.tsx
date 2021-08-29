import Div, { DivProps } from './Div';

export function Row(props: RowProps) {
    return <Div flex responsive {...props} />;
}

export type RowProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default Row;
