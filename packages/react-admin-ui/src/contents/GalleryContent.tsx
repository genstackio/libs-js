import Gallery, {GalleryProps} from "../molecules/Gallery";

export function GalleryContent(props: GalleryContentProps) {
    return (
        <Gallery {...props} />
    );
}

export interface GalleryContentProps extends GalleryProps {
}

export default GalleryContent;
