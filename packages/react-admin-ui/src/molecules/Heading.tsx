import clsx from 'clsx';
import { WithText, WithColorOfText } from '../withs';
import { AsComponent } from '../as';
import { HeadingText } from '../atoms';

export function Heading({ className, text, color }: HeadingProps) {
    return (
        <div className={clsx('flex justify-between items-center border-b-2 my-8', className)}>
            <div className={'flex-col my-8'}>
                <HeadingText titleClassName={'flex-1'} color={color} title={text} variant={'smmd'} />
            </div>
        </div>
    );
}

export interface HeadingProps extends AsComponent, WithText, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default Heading;
