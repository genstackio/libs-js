import { useState, useCallback } from 'react';
import clsx from 'clsx';
import MosaicItem from '../atoms/MosaicItem';
import { WithItems } from '../withs';

export function MosaicItems({ items, selected = {}, onSelectionChange }: MosaicItemsProps) {
    const [selectedItem, setSelected] = useState(selected);
    const handleClick = useCallback(
        (item) => () => {
            setSelected(item);
            onSelectionChange && onSelectionChange(item);
        },
        [setSelected, onSelectionChange],
    );

    return (
        <div className={'flex flex-wrap xs:justify-around'}>
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

export interface MosaicItemsProps extends WithItems {
    onSelectionChange?: Function;
    selected: any;
}

export default MosaicItems;
