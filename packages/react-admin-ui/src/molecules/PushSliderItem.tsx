import { Push, PushProps } from './Push';
import { SwiperSlide } from 'swiper/react';

export function PushSliderItem({ className, ...props }: PushSliderItemProps) {
    return (
        <SwiperSlide>
            <Push {...props} />
        </SwiperSlide>
    );
}

export type PushSliderItemProps = PushProps;

export default PushSliderItem;
