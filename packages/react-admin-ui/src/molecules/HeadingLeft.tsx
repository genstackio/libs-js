import clsx from 'clsx';
import Text from '../atoms/Text';
import { WithTitle, WithDescription } from '../withs';
import { AsComponent } from '../as';

export function HeadingLeft({ className, title, description }: HeadingLeftProps) {
    return (
        <div className={clsx('space-y-2', className)}>
            <Text text={title} variant={'body'} />
            <Text text={description} variant={'description'} />
        </div>
    );
}

export interface HeadingLeftProps extends AsComponent, WithTitle, WithDescription {}

// noinspection JSUnusedGlobalSymbols
export default HeadingLeft;
