import Image from './Image';
import { image } from '../types';

export function Slide({ slide, index }: SlideProps) {
    return <div>{slide.image && <Image {...slide.image} objectFit={'contain'} />}</div>;
}

export interface SlideProps {
    slide: { image: image };
    index: number;
}

export default Slide;
