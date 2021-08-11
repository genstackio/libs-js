import Items from '../../atoms/Items';
import Block, { BaseBlockProps } from '../../atoms/Block';
import { visual_bullet_block_item } from '../../types';
import VisualBulletBlockItem from '../../molecules/VisualBulletBlockItem';

export function VisualBulletBlock({ items, ...props }: VisualBulletBlockProps) {
    return <Items items={items} container={Block} containerProps={props} component={VisualBulletBlockItem} />;
}

export interface VisualBulletBlockProps extends BaseBlockProps {
    items: visual_bullet_block_item[];
}

// noinspection JSUnusedGlobalSymbols
export default VisualBulletBlock;
