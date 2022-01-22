import Block, { BaseBlockProps } from '../../atoms/Block';
import Items from '../../atoms/Items';
import Buttons from '../../atoms/Buttons';
import NewsBlockItem from '../../molecules/NewsBlockItem';
import useBlock from '../../hooks/useBlock';
import useButtons from '../../hooks/useButtons';
import useItems from '../../hooks/useItems';
import { WithButtons, WithDropdownItems, WithItemsOfNews } from '../../withs';

const defaultItems = [];

export function NewsBlock({ items = defaultItems, title, ...props }: NewsBlockProps) {
    const [bProps, rest2] = useBlock(props, { p: 'none', title });
    const [itProps, rest] = useItems(rest2, NewsBlockItem);
    const [btProps] = useButtons(rest, { btnColor: props.color, className: 'flex justify-center mt-2 sm:mt-4' });

    return (
        <Block {...bProps}>
            <Items {...itProps} />
            <Buttons {...btProps} />
        </Block>
    );
}

export interface NewsBlockProps extends BaseBlockProps, WithButtons, WithItemsOfNews, WithDropdownItems {}

// noinspection JSUnusedGlobalSymbols
export default NewsBlock;
