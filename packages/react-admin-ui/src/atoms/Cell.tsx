import Div, { DivProps } from './Div';

export function Cell(props: CellProps) {
    return <Div flex1 {...props} />;
}

export type CellProps = DivProps;

// noinspection JSUnusedGlobalSymbols
export default Cell;
