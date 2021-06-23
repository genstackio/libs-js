import { class_name } from '../types';
import clsx from 'clsx';
import cornerClass, { corner } from '../mappings/corners';

export function Image({ alt, className, url, corner = 'square' }: ImageProps) {
    if (!url) return null;
    return <img src={url} alt={alt} className={clsx(className, cornerClass(corner))} />;
}

export interface ImageProps {
    alt: string;
    className?: class_name;
    url: string;
    corner?: corner;
}

export default Image;
