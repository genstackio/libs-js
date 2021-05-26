export function Image({url, alt, className}: ImageProps) {
    return (
            <img src={url} alt={alt} className={className} />
    )
}

export interface ImageProps {
    url: string,
    alt: string,
    className?: string,
}

export default Image