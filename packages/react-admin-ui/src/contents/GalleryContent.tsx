import Gallery, { GalleryProps } from '../molecules/Gallery';

export function GalleryContent(props: GalleryContentProps) {
    return <Gallery {...props} />;
}

export type GalleryContentProps = GalleryProps;

export default GalleryContent;
