import clsx from "clsx";

const sizes = {
    'xl': 'w-24 h-30 text-5xl',
}
const shapes = {
    'rounded': 'rounded-lg',
}

export function Thumbnail({image, size = 'xl', shape = 'rounded'}: ThumbnailProps) {
    return (
        <div className={clsx('inline-block animated tada')}>
            {image && <img src={image.url} alt={image.alt} className={clsx(sizes[size], shapes[shape])} />}
        </div>
    );
}

export interface ThumbnailProps {
    image?: any,
    size?: 'xl',
    shape?: 'rounded',
}

export default Thumbnail