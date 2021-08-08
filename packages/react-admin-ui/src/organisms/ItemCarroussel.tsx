import ItemCarrousselSlide from '../molecules/ItemCarrousselSlide';
import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import Row from '../atoms/Row';
import { WithItems, WithTitle } from '../withs';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import clsx from 'clsx';
import { AsComponent } from '../as';

SwiperCore.use([A11y]);

export function ItemCarroussel({ className, title, items = [] }: ItemCarrousselProps) {
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.only('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const slidesOffset = isTablet ? 24 : isMobile ? 16 : 150;
    const spaceBetween = isTablet ? 16 : isMobile ? 8 : 24;

    const swiperProps: any = {
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
    };

    return items.length ? (
        <div className={clsx('relative pb-3.5 sm:pb-7 bg-clear', className)}>
            <Row className={'p-0'}>
                <Container className={'grid-cols-12'}>
                    <Text variant={'title3'} text={title} className={'pt-16 sm:pt-32'} />
                </Container>
            </Row>
            <Swiper {...swiperProps} className={'relative w-full pt-6 sm:pt-3'}>
                {items.map((item, index) => (
                    <SwiperSlide key={`itm-${index}`} className={'w-72 md:w-56 sm:w-40'}>
                        <ItemCarrousselSlide {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    ) : null;
}

export interface ItemCarrousselProps extends AsComponent, WithTitle, WithItems {}

export default ItemCarroussel;
