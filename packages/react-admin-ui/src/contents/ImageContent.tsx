import Image, { ImageProps } from '../atoms/Image';

export function ImageContent(props: ImageContentProps) {
    return <Image {...props} />;
}

export type ImageContentProps = ImageProps;

export default ImageContent;
