import { useState, useCallback } from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import MosaicItem from '../atoms/MosaicItem';
import { AsComponent } from '../as';
import { WithItems } from '../withs';

export function MosaicItems({ className, items, onSelectionChange, selected = {} }: MosaicItemsProps) {
    const [selectedItem, setSelected] = useState(selected);
    const handleClick = useCallback(
        (item) => () => {
            setSelected(item);
            onSelectionChange && onSelectionChange(item);
        },
        [setSelected, onSelectionChange],
    );

    return (
        <Div flex wrap className={clsx('justify-around sm:justify-between', className)}>
            {items &&
                items.map((item, index) => (
                    <div
                        key={`mosaicItem-${index}`}
                        onClick={handleClick(item)}
                        className={clsx(
                            'm-1 cursor-pointer border-4',
                            selectedItem.id === item.id ? 'border-primary' : 'border-opacity-0 border-transparent',
                        )}
                    >
                        <MosaicItem item={item} />
                    </div>
                ))}
        </Div>
    );
}

export interface MosaicItemsProps extends AsComponent, WithItems {
    onSelectionChange?: Function;
    selected: any;
}

// noinspection JSUnusedGlobalSymbols
export default MosaicItems;
