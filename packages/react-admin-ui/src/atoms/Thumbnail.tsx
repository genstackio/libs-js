import clsx from "clsx";
import {image} from '../types';

const sizes = {
    'xl': 'w-24 h-30 text-5xl',
}
const shapes = {
    'rounded': 'rounded-lg',
}

export function Thumbnail({image, shape = 'rounded', size = 'xl'}: ThumbnailProps) {
    return (
        <div className={clsx('inline-block animated tada')}>
            {image && <img src={image.url} alt={image.alt} className={clsx(sizes[size], shapes[shape])} />}
        </div>
    );
}

export interface ThumbnailProps {
    image?: image,
    shape?: 'rounded',
    size?: 'xl',
}

export default Thumbnail