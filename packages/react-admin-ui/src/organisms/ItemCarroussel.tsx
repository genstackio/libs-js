import SwiperCore, { A11y } from 'swiper';
import { WithItems, WithTitle } from '../withs';
import { AsComponent } from '../as';
import ItemCarrousselItem from './ItemCarrousselItem';

SwiperCore.use([A11y]);

export function ItemCarroussel({ title, items = [] }: ItemCarrousselProps) {
    return <ItemCarrousselItem title={title} items={items} />;
}

export interface ItemCarrousselProps extends AsComponent, WithTitle, WithItems {}

export default ItemCarroussel;
