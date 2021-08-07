import clsx from 'clsx';
import Div from './Div';
import { WithPadding } from '../withs';
import { AsWrapper } from '../as';

export function BlockContent({ padding = 'default', className, children }: BlockContentProps) {
    return (
        <Div padding={padding} className={clsx('text-md', className)}>
            {children}
        </Div>
    );
}

export interface BlockContentProps extends AsWrapper, WithPadding {}

export default BlockContent;
