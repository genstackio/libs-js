import { class_name } from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';

export function Image({ alt, className, url, corner = 'square' }: ImageProps) {
    if (!url) return null;
    return <img src={url} alt={alt} className={clsx(cornerClass(corner), className)} />;
}

export interface ImageProps {
    className?: class_name;
    alt: string;
    url: string;
    corner?: corner;
}

export default Image;
