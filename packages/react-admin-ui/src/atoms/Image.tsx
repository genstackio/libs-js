export function Image({url, alt}: ImageProps) {
    return (
            <img src={url} alt={alt} />
    )
}

export interface ImageProps {
    url: string,
    alt: string,
}

export default Image