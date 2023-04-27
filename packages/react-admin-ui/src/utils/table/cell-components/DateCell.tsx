import { BaseCell } from '../../../types';

function DateCell({ value }: DateCellProps) {
    return <>{new Date(value).toLocaleString()}</>;
}

export type DateCellProps = BaseCell;

// noinspection JSUnusedGlobalSymbols
export default DateCell;
