import Items from '../../atoms/Items';
import Block, { BaseBlockProps } from '../../atoms/Block';
import VisualBulletBlockItem from '../../molecules/VisualBulletBlockItem';
import { visual_bullet_block_item } from '../../types';

export function VisualBulletBlock({ items, ...props }: VisualBulletBlockProps) {
    return <Items component={VisualBulletBlockItem} container={Block} containerProps={props} items={items} />;
}

export interface VisualBulletBlockProps extends BaseBlockProps {
    items: visual_bullet_block_item[];
}

// noinspection JSUnusedGlobalSymbols
export default VisualBulletBlock;
