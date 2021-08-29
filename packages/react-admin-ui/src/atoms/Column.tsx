import Div, { DivProps } from './Div';

export function Column(props: ColumnProps) {
    return <Div col full {...props} />;
}

export type ColumnProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default Column;
