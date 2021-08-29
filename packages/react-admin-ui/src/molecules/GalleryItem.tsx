import Div from '../atoms/Div';
import Image from '../atoms/Image';
import { AsComponent } from '../as';
import { WithTitle, WithIcon, WithButton, WithItemsOfGallery, WithImage } from '../withs';

export function GalleryItem({ className, image }: GalleryItemProps) {
    return (
        <div className={className}>
            <Div b={'lg'} className={'border-double rounded-md'}>
                <Image {...image} />
            </Div>
        </div>
    );
}

export interface GalleryItemProps extends AsComponent, WithTitle, WithIcon, WithButton, WithItemsOfGallery, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default GalleryItem;
