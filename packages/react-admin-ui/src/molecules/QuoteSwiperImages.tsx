import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import clsx from 'clsx';
import { WithItems } from '../withs';
import { AsComponent } from '../as';
import { Items } from '../atoms';
import QuoteSwiperImage from './QuoteSwiperImage';
import { useMemo } from 'react';

export function QuoteSwiperImages({
    className,
    controller,
    onSwiper,
    navLeftController,
    navRightController,
    items = [],
}: QuoteSwiperImagesProps) {
    const params: any = useMemo(
        () => ({
            loop: true,
            slidesPerView: items.length > 5 ? 5 : 3,
            loopAdditionalSlides: 5,
            centeredSlides: true,
            initialSlide: 0,
            watchSlidesVisibility: true,
            controller: {
                control: controller,
            },
            slideToClickedSlide: true,
            navigation: {
                prevEl: navLeftController && (navLeftController.current as unknown as HTMLElement),
                nextEl: navRightController && (navRightController.current as unknown as HTMLElement),
            },
            onSwiper: onSwiper,
        }),
        [items.length, controller, onSwiper, navLeftController, navRightController],
    );
    return (
        <Swiper {...params} className={clsx('w-2/3 mb-5 p-1.5', 'md:w-1/2', 'sm:w-full', className)}>
            <Items items={items} component={QuoteSwiperImage} />
        </Swiper>
    );
}

export interface QuoteSwiperImagesProps extends AsComponent, WithItems {
    controller?: any;
    onSwiper?: Function;
    navLeftController?: any;
    navRightController?: any;
}

export default QuoteSwiperImages;
