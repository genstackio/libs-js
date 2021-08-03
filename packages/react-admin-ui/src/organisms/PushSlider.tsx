import Push from './Push';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Row from '../atoms/Row';

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

export interface PushSliderProps {
    items?: any[];
}

export default PushSlider;
