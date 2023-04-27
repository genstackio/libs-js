import { FlagIcon } from '../../../atoms/FlagIcon';
import { BaseCell } from '../../../types';

export function LocaleCell({ value }: LocaleCellProps) {
    return value ? <FlagIcon locale={value.replace('_', '-')} /> : null;
}

export type LocaleCellProps = BaseCell;

// noinspection JSUnusedGlobalSymbols
export default LocaleCell;
