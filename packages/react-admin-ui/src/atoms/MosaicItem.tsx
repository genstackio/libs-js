import clsx from 'clsx';
import { WithChildren } from '../withs';

export function MosaicItem({ children, item }: MosaicItemProps) {
    const Comp = typeof item === 'object' && item.component;
    if (!Comp) return <div className={clsx('w-44 h-20', 'bg-disabled')}>{children || ''}</div>;
    return <Comp className={clsx('w-44 h-20')} />;
}

export interface MosaicItemProps extends WithChildren {
    item?: any;
}

export default MosaicItem;
