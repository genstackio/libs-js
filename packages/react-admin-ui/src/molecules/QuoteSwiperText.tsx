import { useMemo } from 'react';
import clsx from 'clsx';
import 'swiper/swiper-bundle.css';
import SwiperCore, { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import QuoteSlide from './QuoteSlide';
import { AsComponent } from '../as';
import { WithItems, WithText, WithTitle } from '../withs';

SwiperCore.use([EffectFade]);

export function QuoteSwiperText({ className, controller, onSwiper, items = [], ...props }: QuoteSwiperTextProps) {
    const params: any = useMemo(
        () => ({
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
        }),
        [controller, onSwiper],
    );

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
