import Image from './Image';
import { image } from '../types';
import { WithIndex } from '../withs';

export function Slide({ slide }: SlideProps) {
    return <div>{slide.image && <Image {...slide.image} objectFit={'contain'} />}</div>;
}

export interface SlideProps extends Required<WithIndex> {
    slide: { image: image };
}

export default Slide;
