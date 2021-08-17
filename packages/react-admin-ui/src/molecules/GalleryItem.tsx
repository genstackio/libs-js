import clsx from 'clsx';
import Image from '../atoms/Image';
import { WithTitle, WithIcon, WithButton, WithItemsOfGallery, WithImage } from '../withs';
import { AsComponent } from '../as';

export function GalleryItem({ className, image }: GalleryItemProps) {
    return (
        <div className={clsx(className)}>
            <div className={'border-double border-4 rounded-md'}>
                <Image {...image} />
            </div>
        </div>
    );
}

export interface GalleryItemProps extends AsComponent, WithTitle, WithIcon, WithButton, WithItemsOfGallery, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default GalleryItem;
