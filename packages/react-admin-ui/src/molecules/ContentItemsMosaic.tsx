import Column from '../atoms/Column';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Items from '../atoms/Items';
import ContentItemMosaic from './ContentItemMosaic';
import { AsComponent } from '../as';
import { WithTitle, WithColorOfBox, WithItemsOfContentItemsMosaic } from '../withs';

export function ContentItemsMosaic({ className, color, items = [], title }: ContentItemsMosaicProps) {
    return (
        <Column className={className}>
            <Text color={color} text={title} variant={'title3'} />
            <Div grid={2} gap={6} my={'md'}>
                <Items color={color} component={ContentItemMosaic} items={items} />
            </Div>
        </Column>
    );
}

export interface ContentItemsMosaicProps
    extends AsComponent,
        WithTitle,
        WithColorOfBox,
        WithItemsOfContentItemsMosaic {}

// noinspection JSUnusedGlobalSymbols
export default ContentItemsMosaic;
