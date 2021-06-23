import clsx from 'clsx';
import { image, corner } from '../types';
import Image from './Image';

const sizes = {
    xl: 'w-24 h-30 text-5xl',
};

export function Thumbnail({ image, corner = 'rounded-xsmall', size = 'xl' }: ThumbnailProps) {
    return (
        <div className={clsx('inline-block animated tada')}>
            {image && <Image {...image} corner={corner} className={sizes[size]} />}
        </div>
    );
}

export interface ThumbnailProps {
    image?: image;
    corner?: corner;
    size?: 'xl';
}

export default Thumbnail;
