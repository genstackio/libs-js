import clsx from 'clsx';
import Items from '../atoms/Items';
import BlockHeader from '../atoms/BlockHeader';
import GalleryItem from './GalleryItem';
import gridColsClass from '../mappings/grid-cols';
import { AsComponent } from '../as';
import { WithTitle, WithIcon, WithButton, WithItemsOfGallery } from '../withs';

export function Gallery({ btnColor, btnLabel, btnType, className, icon, items = [], title }: GalleryProps) {
    return (
        <>
            <BlockHeader
                btnColor={btnColor}
                btnEndIcon={icon}
                btnLabel={btnLabel}
                btnType={btnType}
                title={title || ''}
            />
            <Items
                component={GalleryItem}
                containerClassName={clsx(gridColsClass(4), 'grid gap-3', className)}
                items={items}
            />
        </>
    );
}

export interface GalleryProps extends AsComponent, WithTitle, WithIcon, WithButton, WithItemsOfGallery {}

// noinspection JSUnusedGlobalSymbols
export default Gallery;
