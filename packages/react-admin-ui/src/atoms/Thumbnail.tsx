import clsx from 'clsx';
import Image from './Image';
import thumbnailSizeClass from '../mappings/thumbnail-sizes';
import { WithClassName, WithCorner, WithImage, WithSizeOfThumbnail } from '../withs';

export function Thumbnail({ className, image, corner = 'rounded-xsmall', size }: ThumbnailProps) {
    return (
        <div className={clsx('inline-block animated tada', className)}>
            {image && <Image {...image} corner={corner} className={thumbnailSizeClass(size)} />}
        </div>
    );
}

export interface ThumbnailProps extends WithClassName, WithImage, WithCorner, WithSizeOfThumbnail {}

// noinspection JSUnusedGlobalSymbols
export default Thumbnail;
