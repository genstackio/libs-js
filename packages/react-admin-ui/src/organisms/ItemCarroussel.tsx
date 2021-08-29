import { useMemo } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y } from 'swiper';
import Row from '../atoms/Row';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import ItemCarrousselSlide from '../molecules/ItemCarrousselSlide';
import { useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import { AsComponent } from '../as';
import { WithItems, WithTitle } from '../withs';

SwiperCore.use([A11y]);

export function ItemCarroussel({ className, items = [], title }: ItemCarrousselProps) {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.only('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const slidesOffset = isTablet ? 24 : isMobile ? 16 : 150;
    const spaceBetween = isTablet ? 16 : isMobile ? 8 : 24;
    const swiperProps: any = useMemo(
        () => ({
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: {
                invert: false,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            slidesOffsetBefore: slidesOffset,
            slidesOffsetAfter: slidesOffset,
            spaceBetween,
            grabCursor: true,
        }),
        [slidesOffset, spaceBetween],
    );

    if (!items.length) return null;

    return (
        <Div pb={'_xl'} relative className={clsx('bg-clear', className)}>
            <Row>
                <Container className={'grid-cols-12'}>
                    <Text p={'_ul-t'} text={title} variant={'title3'} />
                </Container>
            </Row>
            <Swiper {...swiperProps} className={'relative w-full pt-3 sm:pt-6'}>
                {items.map((item, index) => (
                    <SwiperSlide key={`itm-${index}`} className={'w-40 sm:w-56 md:w-72'}>
                        <ItemCarrousselSlide {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Div>
    );
}

export interface ItemCarrousselProps extends AsComponent, WithTitle, WithItems {}

export default ItemCarroussel;
