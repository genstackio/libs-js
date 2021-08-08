import QuoteSlide from './QuoteSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import clsx from 'clsx';
import { WithItems } from '../withs';
import { AsComponent } from '../as';

SwiperCore.use([EffectFade]);

export function QuoteSwiperTexts({ className, controller, onSwiper, items = [] }: QuoteSwiperTextsProps) {
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
            {items.map(({ image, ...text }, index) => (
                <SwiperSlide key={index}>
                    <QuoteSlide {...text} noImage />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export interface QuoteSwiperTextsProps extends AsComponent, WithItems {
    controller?: any;
    onSwiper?: Function;
}

export default QuoteSwiperTexts;
