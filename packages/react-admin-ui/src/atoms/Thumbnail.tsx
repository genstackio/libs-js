import clsx from 'clsx';
import { image, corner, class_name } from '../types';
import Image from './Image';

const sizes = {
    xl: 'w-24 h-30 text-5xl',
};

export function Thumbnail({ className, image, corner = 'rounded-xsmall', size = 'xl' }: ThumbnailProps) {
    return (
        <div className={clsx('inline-block animated tada', className)}>
            {image && <Image {...image} corner={corner} className={sizes[size]} />}
        </div>
    );
}

export interface ThumbnailProps {
    className?: class_name;
    image?: image;
    corner?: corner;
    size?: 'xl';
}

export default Thumbnail;
