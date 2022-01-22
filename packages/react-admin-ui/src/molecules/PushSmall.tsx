import clsx from 'clsx';
import Div from '../atoms/Div';
import Items from '../atoms/Items';
import Push from '../molecules/Push';
import { AsBox } from '../as';
import { WithItemsOfPush } from '../withs';

const defaultItems = [];

export function PushSmall({ className, color, items = defaultItems, variant = 'filled' }: PushSmallProps) {
    if (!items.length) return null;

    return (
        <Div flex center p={'lg'} className={'flex-grow'}>
            <Div flex full spaced wrap className={'box-border'}>
                <Div grid={2} className={clsx('gap-3', className)}>
                    <Items
                        color={color}
                        component={Push}
                        imagePosition={'bottom'}
                        items={items}
                        variant={variant}
                        className={'sm:flex-grow-0 self-stretch w-full sm:w-auto flex-col sm:flex-row'}
                    />
                </Div>
            </Div>
        </Div>
    );
}

export interface PushSmallProps extends AsBox, WithItemsOfPush {}

export default PushSmall;
