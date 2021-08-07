import clsx from 'clsx';
import Div from './Div';
import { WithChildren, WithClassName, WithCenter } from '../withs';

export function Column({ className, children, center = false }: ColumnProps) {
    return (
        <Div full flex center={center} className={clsx('flex-col', className)}>
            {children}
        </Div>
    );
}

export interface ColumnProps extends WithClassName, WithChildren, WithCenter {}

export default Column;
