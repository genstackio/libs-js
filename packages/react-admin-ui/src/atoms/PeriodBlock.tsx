import clsx from 'clsx';
import { WithText, WithColorOfText, WithValueAsRichText } from '../withs';
import { AsComponent } from '../as';
import HeadingText from './HeadingText';

export function PeriodBlock({ className, color, text, value }: PeriodBlockProps) {
    return (
        <HeadingText
            className={clsx('border-r-2 border-disabled py-2 text-center', className)}
            title={text}
            subtitle={value}
            color={color}
            variant={'xxsmall2'}
            titleClassName={clsx('px-2', value && 'mb-2')}
        />
    );
}

export interface PeriodBlockProps extends AsComponent, WithColorOfText, WithText, WithValueAsRichText {}

// noinspection JSUnusedGlobalSymbols
export default PeriodBlock;
