import { SwiperSlide } from 'swiper/react';
import Push, { PushProps } from './Push';

export function PushSliderItem({ className, ...props }: PushSliderItemProps) {
    return (
        <SwiperSlide>
            <Push {...props} />
        </SwiperSlide>
    );
}

export type PushSliderItemProps = PushProps;

export default PushSliderItem;
