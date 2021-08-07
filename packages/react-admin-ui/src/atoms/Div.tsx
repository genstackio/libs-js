import clsx from 'clsx';
import { WithCenter, WithChildren, WithClassName, WithPadding } from '../withs';
import { flag } from '../types';
import paddingClass from '../mappings/paddings';

export function Div({
    padding = 'none',
    center = false,
    full = false,
    inline = false,
    relative = false,
    flex = false,
    children,
    className,
}: DivProps) {
    return (
        <div
            className={clsx(
                paddingClass(padding),
                center && 'flex items-center justify-center',
                full && 'w-full',
                inline && 'inline-block',
                relative && 'relative',
                flex && 'flex',
                className,
            )}
        >
            {children || ''}
        </div>
    );
}

export interface DivProps extends WithChildren, WithClassName, WithPadding, WithCenter {
    full?: flag;
    inline?: flag;
    relative?: flag;
    flex?: flag;
}

export default Div;
