import clsx from 'clsx';
import Div from './Div';
import { WithChildren, WithClassName, WithPadding } from '../withs';

export function BlockContent({ padding = 'default', className, children }: BlockContentProps) {
    return (
        <Div padding={padding} className={clsx('text-md', className)}>
            {children}
        </Div>
    );
}

export interface BlockContentProps extends WithClassName, WithChildren, WithPadding {}

export default BlockContent;
