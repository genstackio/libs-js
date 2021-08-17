import clsx from 'clsx';
import { WithTitle, WithIcon, WithButton, WithItemsOfGallery } from '../withs';
import { AsComponent } from '../as';
import Items from '../atoms/Items';
import GalleryItem from './GalleryItem';
import gridColsClass from '../mappings/grid-cols';
import BlockHeader from '../atoms/BlockHeader';

export function Gallery({ className, title, items = [], icon, btnColor, btnLabel, btnType }: GalleryProps) {
    return (
        <>
            <BlockHeader
                title={title || ''}
                btnColor={btnColor}
                btnEndIcon={icon}
                btnType={btnType}
                btnLabel={btnLabel}
            />
            <Items
                items={items}
                component={GalleryItem}
                containerClassName={clsx(gridColsClass(4), 'grid md:grid-cols-2 sm:grid-cols-1 gap-3', className)}
            />
        </>
    );
}

export interface GalleryProps extends AsComponent, WithTitle, WithIcon, WithButton, WithItemsOfGallery {}

// noinspection JSUnusedGlobalSymbols
export default Gallery;
