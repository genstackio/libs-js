import clsx from 'clsx';
import Div from './Div';
import { WithCenter } from '../withs';
import { AsWrapper } from '../as';

export function Column({ className, children, center = false }: ColumnProps) {
    return (
        <Div full flex center={center} className={clsx('flex-col', className)}>
            {children}
        </Div>
    );
}

export interface ColumnProps extends AsWrapper, WithCenter {}

export default Column;
