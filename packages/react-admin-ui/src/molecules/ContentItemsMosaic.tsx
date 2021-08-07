import Column from '../atoms/Column';
import { WithTitle, WithClassName, WithColorOfBox } from '../withs';
import { content_item_mosaic_item, text_color } from '../types';
import ContentItemMosaic from './ContentItemMosaic';
import Text from '../atoms/Text';
import clsx from 'clsx';

export function ContentItemsMosaic({ title, items, color, titleColor = 'dark', className }: ContentItemsMosaicProps) {
    return (
        <Column className={clsx(className)}>
            <Text variant={'title3'} text={title} color={titleColor} />
            <div className={'my-4 grid grid-cols-2 gap-6 xs:grid-cols-1 xs:gap-2'}>
                {items.map((item, index) => (
                    <ContentItemMosaic {...item} color={color} key={index} />
                ))}
            </div>
        </Column>
    );
}

export interface ContentItemsMosaicProps extends WithTitle, WithColorOfBox, WithClassName {
    items: content_item_mosaic_item[];
    titleColor?: text_color;
}

export default ContentItemsMosaic;
