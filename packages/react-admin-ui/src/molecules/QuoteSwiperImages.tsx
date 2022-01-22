import { useMemo } from 'react';
import clsx from 'clsx';
import 'swiper/swiper-bundle.css';
import { Swiper } from 'swiper/react';
import Items from '../atoms/Items';
import QuoteSwiperImage from './QuoteSwiperImage';
import { AsComponent } from '../as';
import { WithItems } from '../withs';

export function QuoteSwiperImages({
    className,
    controller,
    items = undefined,
    onSwiper,
    navLeftController,
    navRightController,
}: QuoteSwiperImagesProps) {
    const params: any = useMemo(
        () => ({
            loop: true,
            slidesPerView: (items ? items.length : 0) > 5 ? 5 : 3,
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
        [items?.length, controller, onSwiper, navLeftController, navRightController],
    );

    return (
        <Swiper {...params} className={clsx('w-full sm:w-2/3 md:w-1/2 mb-5 p-1.5', className)}>
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
