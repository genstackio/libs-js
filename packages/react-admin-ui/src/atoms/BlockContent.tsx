import clsx from 'clsx';
import paddingClass from '../mappings/paddings';
import { WithChildren, WithClassName, WithPadding } from '../withs';

export function BlockContent({ padding = 'default', className, children }: BlockContentProps) {
    return <div className={clsx(paddingClass(padding), 'text-md', className)}>{children || ''}</div>;
}

export interface BlockContentProps extends WithClassName, WithChildren, WithPadding {}

export default BlockContent;
