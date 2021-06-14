import {class_name} from "../types";

export function Image({alt, className, url}: ImageProps) {
    return (
        <img src={url} alt={alt} className={className} />
    )
}

export interface ImageProps {
    alt: string,
    className?: class_name,
    url: string,
}

export default Image