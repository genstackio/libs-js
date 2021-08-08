import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Slide from '../atoms/Slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import Block from '../atoms/Block';
import { WithBox, WithImage, WithSubtitle, WithText, WithTitle } from '../withs';
import { AsComponent } from '../as';
import { slide } from '../types';

export function Slideshow({
    className,
    title,
    text,
    subtitle,
    slides,
    color = 'primary',
    variant = 'contained',
    image,
}: SlideshowProps) {
    const swiperProps: any = {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        activeSlideKey: 'slide-2',
        mousewheel: {
            invert: false,
            forceToAxis: true,
            releaseOnEdges: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 5,
            },
        },
    };
    const [activeSlide, setActiveSlide] = useState<any>(null);
    useEffect(() => {
        setActiveSlide('slide-2');
    }, [setActiveSlide]);
    return (
        <Block color={color} variant={variant} image={image} className={className}>
            <Row className={clsx('flex-col')}>
                <Text className={'text-center'} variant={'title4'} text={title} />
                <Text className={'text-center py-10 sm:py-5'} variant={'text'} text={text} />
                <Text className={'text-center'} text={subtitle} variant={'subtitle'} />
                <div className={'self-center w-full py-5'}>
                    {slides && (
                        <Swiper {...swiperProps} className={'w-10/12'} activeSlideKey={activeSlide}>
                            {slides.map((slide, index) => (
                                <SwiperSlide key={`slide-${index}`}>
                                    <Slide slide={slide} index={index} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </Row>
        </Block>
    );
}

export interface SlideshowProps extends AsComponent, WithTitle, WithSubtitle, WithText, WithBox, WithImage {
    slides?: slide[];
}

// noinspection JSUnusedGlobalSymbols
export default Slideshow;
