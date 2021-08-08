import Image from './Image';
import { WithIndex, WithSlide } from '../withs';
import { AsComponent } from '../as';

export function Slide({ slide, className }: SlideProps) {
    return <div className={className}>{slide.image && <Image {...slide.image} objectFit={'contain'} />}</div>;
}

export interface SlideProps extends AsComponent, Required<WithIndex>, Required<WithSlide> {}

// noinspection JSUnusedGlobalSymbols
export default Slide;
