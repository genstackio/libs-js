import {useMemo} from 'react';
import { class_name } from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';

const defaultImage = 'https://via.placeholder.com/350x250?text=%20';

export function Image({className, url, corner = 'square', loading = 'lazy', alt, tablet, mobile, objectFit = 'initial', objectPosition = undefined}: ImgProps) {
    const style = useMemo(() => ({objectFit, objectPosition}), [objectFit, objectPosition]);
    if (!url) return null;
    return (
        <picture>
            {mobile && mobile.url && <source media="(max-width: 600px)" srcSet={mobile.url}/>}
            {tablet && tablet.url && <source media="(max-width: 960px)" srcSet={tablet.url}/>}
            <source media="(min-width: 961px)" srcSet={url || defaultImage}/>
            <img className={clsx('w-full h-full', cornerClass(corner), className)}
                 alt={alt} style={style} src={url || defaultImage}
                 loading={loading}
            />
        </picture>
    );
}

export interface ImgProps {
    className?: class_name;
    url?: string,
    alt?: string,
    tablet?: any,
    mobile?: any,
    objectFit?: any,
    objectPosition?: any,
    rounded?: boolean,
    loading?: 'lazy'
    corner?: corner;
}

export default Image;
