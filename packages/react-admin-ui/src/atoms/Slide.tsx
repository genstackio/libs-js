import Image from './Image';
import Div from './Div';
import { AsComponent } from '../as';
import { WithIndex, WithSlide } from '../withs';

export function Slide({ className, slide }: SlideProps) {
    return (
        <Div className={className}>
            <Image {...slide.image} contained />
        </Div>
    );
}

export interface SlideProps extends AsComponent, Required<WithIndex>, Required<WithSlide> {}

// noinspection JSUnusedGlobalSymbols
export default Slide;
