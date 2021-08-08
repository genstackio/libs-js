import clsx from 'clsx';
import Text from './Text';
import { WithText, WithColorOfText, WithValueAsRichText } from '../withs';
import { AsComponent } from '../as';

export function PeriodBlock({ className, color, text, value }: PeriodBlockProps) {
    return (
        <div className={clsx('h-24 border-r-2 border-disabled py-2 text-center', className)}>
            <Text className={'px-2 mb-2'} variant={'title6'} text={text} color={color} />
            <Text variant={'title3'} text={value} color={color} />
        </div>
    );
}

export interface PeriodBlockProps extends AsComponent, WithColorOfText, WithText, WithValueAsRichText {}

// noinspection JSUnusedGlobalSymbols
export default PeriodBlock;
