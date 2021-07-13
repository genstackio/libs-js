import clsx from 'clsx';
import { rich_text } from '../types';
import Text from './Text';
import { WithClassName, WithText, WithTextColor } from '../withs';

export function PeriodBlock({ className, color, text, value }: PeriodBlockProps) {
    return (
        <div className={clsx('h-24 border-r-2 border-disabled py-2 text-center', className)}>
            <Text className={'px-2 mb-2'} variant={'title6'} text={text} color={color} />
            <Text variant={'title3'} text={value} color={color} />
        </div>
    );
}

export interface PeriodBlockProps extends WithClassName, WithTextColor, WithText {
    value?: rich_text;
}
export default PeriodBlock;
