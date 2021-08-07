import Push from './Push';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Row from '../atoms/Row';
import { WithItems } from '../withs';

SwiperCore.use([Pagination]);

export function PushSlider({ items = [] }: PushSliderProps) {
    return (
        <Row>
            <Swiper pagination={{ clickable: true }}>
                {items.map((itemsProps, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <Push {...itemsProps} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Row>
    );
}

export type PushSliderProps = WithItems;

export default PushSlider;
