import clsx from 'clsx';
import { useMemo } from 'react';
import cornerClass from '../mappings/corners';
import shapeClass from '../mappings/shapes';
import imageSizeClass from '../mappings/image-sizes';
import { flag } from '../types';
import { AsComponent } from '../as';
import { WithCorner, WithShape, WithSizeOfImage } from '../withs';

const defaultImage = 'https://via.placeholder.com/350x250?text=%20';

export function Image({
    alt,
    className,
    contained = false,
    corner = 'square',
    expand = true,
    loading = 'lazy',
    mobile,
    objectFit = undefined,
    objectPosition = undefined,
    shape,
    size = undefined,
    tablet,
    url,
}: ImageProps) {
    const style = useMemo(
        () => ({ objectFit: objectFit || (contained ? 'contain' : undefined), objectPosition }),
        [objectFit, contained, objectPosition],
    );

    if (!url) return null;

    return (
        <picture className={clsx(expand && 'w-full h-full')}>
            {mobile && mobile.url && <source media="(max-width: 600px)" srcSet={mobile.url} />}
            {tablet && tablet.url && <source media="(max-width: 960px)" srcSet={tablet.url} />}
            <source media="(min-width: 961px)" srcSet={url || defaultImage} />
            <img
                alt={alt}
                loading={loading}
                src={url || defaultImage}
                style={style}
                className={clsx(
                    expand && !contained && 'w-full h-full object-contain',
                    cornerClass(corner),
                    shapeClass(shape),
                    imageSizeClass(size),
                    className,
                )}
            />
        </picture>
    );
}

export interface ImageProps extends AsComponent, WithCorner, WithShape, WithSizeOfImage {
    expand?: flag;
    url?: string;
    alt?: string;
    tablet?: any;
    mobile?: any;
    objectFit?: any;
    objectPosition?: any;
    rounded?: boolean;
    contained?: flag;
    loading?: 'lazy';
}

// noinspection JSUnusedGlobalSymbols
export default Image;
