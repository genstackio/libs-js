export function Image({alt, className, url}: ImageProps) {
    return (
        <img src={url} alt={alt} className={className} />
    )
}

export interface ImageProps {
    alt: string,
    className?: string,
    url: string,
}

export default Image