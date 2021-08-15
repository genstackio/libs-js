import clsx from 'clsx';
import HeadingText from './HeadingText';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithText, WithColorOfText, WithValueAsRichText } from '../withs';

export function PeriodBlock({ className, last = false, color, text, value }: PeriodBlockProps) {
    return (
        <HeadingText
            color={color}
            subtitle={value}
            title={text}
            titleClassName={clsx('px-2', value && 'mb-2')}
            variant={'xxsmall2'}
            className={clsx(!last && 'sm:border-r-2 sm:border-disabled', 'py-2 text-center', className)}
        />
    );
}

export interface PeriodBlockProps extends AsComponent, WithColorOfText, WithText, WithValueAsRichText {
    last?: flag;
}

// noinspection JSUnusedGlobalSymbols
export default PeriodBlock;
