import Push from '../molecules/Push';
import clsx from 'clsx';
import gridColsClass from '../mappings/grid-cols';
import Items from '../atoms/Items';
import { AsBox } from '../as';
import { WithItemsOfPush } from '../withs';

export function PushSmall({ items = [], color, variant = 'filled', className }: PushSmallProps) {
    return items.length ? (
        <div className={'flex flex-grow justify-center items-center p-6'}>
            <div className={'flex flex-wrap justify-between box-border w-full'}>
                <div className={clsx(gridColsClass(2), 'grid sm:grid-cols-1 gap-3', className)}>
                    <Items
                        items={items}
                        component={Push}
                        color={color}
                        variant={variant}
                        imagePosition={'bottom'}
                        className={'flex-grow-0 self-stretch sm:w-full sm:flex-col'}
                    />
                </div>
            </div>
        </div>
    ) : null;
}

export interface PushSmallProps extends AsBox, WithItemsOfPush {}

export default PushSmall;
