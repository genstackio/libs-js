import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Row from '../atoms/Row';
import Push from '../molecules/Push';
import { WithItems } from '../withs';
import { AsComponent } from '../as';

SwiperCore.use([Pagination]);

const pagination = { clickable: true };

const defaultItems = [];

export function PushSlider({ className, items = defaultItems }: PushSliderProps) {
    return (
        <Row className={className}>
            <Swiper pagination={pagination}>
                {items.map((itemsProps, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <Push {...itemsProps} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Row>
    );
}

export interface PushSliderProps extends AsComponent, WithItems {}

// noinspection JSUnusedGlobalSymbols
export default PushSlider;
