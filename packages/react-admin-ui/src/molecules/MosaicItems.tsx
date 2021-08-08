import clsx from 'clsx';
import { useState, useCallback } from 'react';
import MosaicItem from '../atoms/MosaicItem';
import { WithItems } from '../withs';
import { AsComponent } from '../as';

export function MosaicItems({ className, items, selected = {}, onSelectionChange }: MosaicItemsProps) {
    const [selectedItem, setSelected] = useState(selected);
    const handleClick = useCallback(
        (item) => () => {
            setSelected(item);
            onSelectionChange && onSelectionChange(item);
        },
        [setSelected, onSelectionChange],
    );

    return (
        <div className={clsx('flex flex-wrap xs:justify-around', className)}>
            {items &&
                items.map((item, index) => (
                    <div
                        key={`mosaicItem-${index}`}
                        className={clsx(
                            'm-1 cursor-pointer border-4',
                            selectedItem.id === item.id ? 'border-primary' : 'border-opacity-0 border-transparent',
                        )}
                        onClick={handleClick(item)}
                    >
                        <MosaicItem item={item} />
                    </div>
                ))}
        </div>
    );
}

export interface MosaicItemsProps extends AsComponent, WithItems {
    onSelectionChange?: Function;
    selected: any;
}

// noinspection JSUnusedGlobalSymbols
export default MosaicItems;
