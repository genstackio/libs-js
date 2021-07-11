import { useMemo } from 'react';
import { class_name, flag } from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';

const defaultImage = 'https://via.placeholder.com/350x250?text=%20';

export function Image({
    className,
    url,
    expand = true,
    corner = 'square',
    loading = 'lazy',
    alt,
    tablet,
    mobile,
    objectFit = undefined,
    objectPosition = undefined,
}: ImgProps) {
    const style = useMemo(() => ({ objectFit, objectPosition }), [objectFit, objectPosition]);
    if (!url) return null;
    return (
        <picture className={clsx(expand && 'w-full h-full')}>
            {mobile && mobile.url && <source media="(max-width: 600px)" srcSet={mobile.url} />}
            {tablet && tablet.url && <source media="(max-width: 960px)" srcSet={tablet.url} />}
            <source media="(min-width: 961px)" srcSet={url || defaultImage} />
            <img
                className={clsx(expand && 'w-full h-full object-contain', cornerClass(corner), className)}
                alt={alt}
                style={style}
                src={url || defaultImage}
                loading={loading}
            />
        </picture>
    );
}

export interface ImgProps {
    className?: class_name;
    expand?: flag;
    url?: string;
    alt?: string;
    tablet?: any;
    mobile?: any;
    objectFit?: any;
    objectPosition?: any;
    rounded?: boolean;
    loading?: 'lazy';
    corner?: corner;
}

export default Image;
