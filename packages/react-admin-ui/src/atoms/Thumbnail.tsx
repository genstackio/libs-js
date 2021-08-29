import Div from './Div';
import Image from './Image';
import thumbnailSizeClass from '../mappings/thumbnail-sizes';
import { AsComponent } from '../as';
import { WithCorner, WithImage, WithSizeOfThumbnail } from '../withs';

export function Thumbnail({ className, corner = 'rounded-xsmall', image, size }: ThumbnailProps) {
    return (
        <Div inline className={className}>
            <Image corner={corner} {...image} className={thumbnailSizeClass(size)} />
        </Div>
    );
}

export interface ThumbnailProps extends AsComponent, WithImage, WithCorner, WithSizeOfThumbnail {}

// noinspection JSUnusedGlobalSymbols
export default Thumbnail;
