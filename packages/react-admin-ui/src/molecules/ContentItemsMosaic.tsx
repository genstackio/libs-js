import Column from '../atoms/Column';
import { WithTitle, WithClassName, WithColorOfBox, WithItemsOfContentItemsMosaic } from '../withs';
import ContentItemMosaic from './ContentItemMosaic';
import Text from '../atoms/Text';
import clsx from 'clsx';
import { Items } from '../atoms';

export function ContentItemsMosaic({ title, items = [], color, className }: ContentItemsMosaicProps) {
    return (
        <Column className={clsx(className)}>
            <Text variant={'title3'} text={title} color={color} />
            <div className={'my-4 grid grid-cols-2 gap-6 xs:grid-cols-1 xs:gap-2'}>
                <Items items={items} component={ContentItemMosaic} color={color} />
            </div>
        </Column>
    );
}

export interface ContentItemsMosaicProps
    extends WithTitle,
        WithColorOfBox,
        WithClassName,
        WithItemsOfContentItemsMosaic {}

// noinspection JSUnusedGlobalSymbols
export default ContentItemsMosaic;
