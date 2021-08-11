import clsx from 'clsx';
import { SwiperSlide } from 'swiper/react';
import QuoteSlide from './QuoteSlide';
import { AsComponent } from '../as';
import { WithImage } from '../withs';

export function QuoteSwiperImage({ image }: QuoteSwiperImageProps) {
    return (
        <SwiperSlide className={clsx('w-16 h-16')}>
            <QuoteSlide image={image} />
        </SwiperSlide>
    );
}

export interface QuoteSwiperImageProps extends AsComponent, Required<WithImage> {}

export default QuoteSwiperImage;
