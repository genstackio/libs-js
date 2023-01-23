import Div from './Div';
import Image from './Image';
import thumbnailSizeClass from '../mappings/thumbnail-sizes';
import { AsComponent } from '../as';
import { WithCorner, WithImage, WithSizeOfThumbnail } from '../withs';
import useAmbiance from '@genstackio/react-contexts/lib/hooks/useAmbiance';

export function Thumbnail({ className, corner = undefined, image, size }: ThumbnailProps) {
    const { thumbnailCorner = 'rounded-xsmall' } = useAmbiance();
    corner = (corner || thumbnailCorner) as any;
    return (
        <Div inline className={className}>
            <Image corner={corner} {...image} className={thumbnailSizeClass(size)} />
        </Div>
    );
}

export interface ThumbnailProps extends AsComponent, WithImage, WithCorner, WithSizeOfThumbnail {}

// noinspection JSUnusedGlobalSymbols
export default Thumbnail;
