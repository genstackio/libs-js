import clsx from 'clsx';
import Image from '../atoms/Image';
import { gallery_image } from '../types';
import { WithClassName } from '../withs';

export function Gallery({ className, items = [] }: GalleryProps) {
    return (
        <div className={clsx('grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3', className)}>
            {items.map((item, index) => (
                <div className={'border-double border-4 rounded-md'} key={index}>
                    <Image className={'w-full'} {...item} />
                </div>
            ))}
        </div>
    );
}

export interface GalleryProps extends WithClassName {
    items?: gallery_image[];
}

// noinspection JSUnusedGlobalSymbols
export default Gallery;
