import Image, {ImageProps} from "../atoms/Image";

export function ImageContent(props: ImageContentProps) {
    return (
        <Image {...props} />
    );
}

export interface ImageContentProps extends ImageProps {
}

export default ImageContent;
