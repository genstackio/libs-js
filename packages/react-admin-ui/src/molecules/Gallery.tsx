import clsx from 'clsx';
import Image from '../atoms/Image';
import { class_name, gallery_image } from '../types';

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

export interface GalleryProps {
    className?: class_name;
    items?: gallery_image[];
}

export default Gallery;
