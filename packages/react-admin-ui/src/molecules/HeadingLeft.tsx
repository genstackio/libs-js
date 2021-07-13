import clsx from 'clsx';
import Text from '../atoms/Text';
import { WithClassName, WithTitle, WithDescription } from '../withs';

export function HeadingLeft({ className, title, description }: HeadingLeftProps) {
    return (
        <div className={clsx('space-y-2', className)}>
            <Text text={title} variant={'body'} />
            <Text text={description} variant={'description'} />
        </div>
    );
}

export interface HeadingLeftProps extends WithClassName, WithTitle, WithDescription {}

export default HeadingLeft;
