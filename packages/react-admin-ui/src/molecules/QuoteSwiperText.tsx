import QuoteSlide from './QuoteSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import clsx from 'clsx';
import { WithItems, WithText, WithTitle } from '../withs';
import { AsComponent } from '../as';

SwiperCore.use([EffectFade]);

export function QuoteSwiperText({ className, controller, onSwiper, items = [], ...props }: QuoteSwiperTextProps) {
    const params: any = {
        loop: true,
        loopAdditionalSlides: 5,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 0,
        controller: {
            control: controller,
        },
        onSwiper: onSwiper,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000,
        },
    };
    return (
        <Swiper {...params} className={clsx('sm:w-full md:w-3/4 w-2/3', className)}>
            <SwiperSlide className={clsx('w-16 h-16')}>
                <QuoteSlide {...props} />
            </SwiperSlide>
        </Swiper>
    );
}

export interface QuoteSwiperTextProps extends AsComponent, WithItems, WithTitle, WithItems, WithText {
    controller?: any;
    onSwiper?: Function;
}

export default QuoteSwiperText;
