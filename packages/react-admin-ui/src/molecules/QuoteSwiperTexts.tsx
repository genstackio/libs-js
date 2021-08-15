import { useMemo } from 'react';
import clsx from 'clsx';
import 'swiper/swiper-bundle.css';
import { Swiper } from 'swiper/react';
import SwiperCore, { EffectFade } from 'swiper';
import Items from '../atoms/Items';
import QuoteSwiperText from './QuoteSwiperText';
import { AsComponent } from '../as';
import { WithItems } from '../withs';

SwiperCore.use([EffectFade]);

export function QuoteSwiperTexts({ className, controller, items = [], onSwiper }: QuoteSwiperTextsProps) {
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
        <Swiper {...params} className={clsx('w-full sm:w-2/3 md:w-3/4', className)}>
            <Items component={QuoteSwiperText} items={items} />
        </Swiper>
    );
}

export interface QuoteSwiperTextsProps extends AsComponent, WithItems {
    controller?: any;
    onSwiper?: Function;
}

export default QuoteSwiperTexts;
