import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../atoms/Slide';
import Text from '../atoms/Text';
import Block from '../atoms/Block';
import Column from '../atoms/Column';
import Div from '../atoms/Div';
import useBlock from '../hooks/useBlock';
import { AsBox } from '../as';
import { WithImage, WithSlides, WithSubtitle, WithText, WithTitle } from '../withs';

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

const defaultSlides = [];

export function Slideshow({ image, text, title, slides = defaultSlides, subtitle, ...props }: SlideshowProps) {
    const [bProps] = useBlock(props, { color: 'primary', variant: 'contained', image });
    const [activeSlide, setActiveSlide] = useState<any>(null);

    useEffect(() => {
        setActiveSlide('slide-2');
    }, [setActiveSlide]);

    return (
        <Block {...bProps}>
            <Column>
                <Text center text={title} variant={'title4'} />
                <Text center py={'xlg'} text={text} variant={'text'} />
                <Text center text={subtitle} variant={'subtitle'} />
                <Div full py={'xlg'} selfcenter>
                    {!!slides.length && (
                        <Swiper {...swiperProps} activeSlideKey={activeSlide} className={'w-10/12'}>
                            {slides.map((slide, index) => (
                                <SwiperSlide key={`slide-${index}`}>
                                    <Slide index={index} slide={slide} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </Div>
            </Column>
        </Block>
    );
}

export interface SlideshowProps extends AsBox, WithTitle, WithSubtitle, WithText, WithImage, WithSlides {}

// noinspection JSUnusedGlobalSymbols
export default Slideshow;
