import Block, { BaseBlockProps } from '../../atoms/Block';
import NewsBlockItem from '../../molecules/NewsBlockItem';
import Items from '../../atoms/Items';
import Buttons from '../../atoms/Buttons';
import useBlock from '../../hooks/useBlock';
import useButtons from '../../hooks/useButtons';
import { WithButtons, WithDropdownItems, WithItemsOfNews } from '../../withs';

export function NewsBlock({ title, items = [], ...props }: NewsBlockProps) {
    const [bProps, rest] = useBlock(props, { padding: 'none', title });
    const [btProps] = useButtons(rest, { btnColor: props.color, className: 'flex justify-center mt-4 xs:mt-2' });

    return (
        <Block {...bProps}>
            <Items items={items} component={NewsBlockItem} />
            <Buttons {...btProps} />
        </Block>
    );
}

export interface NewsBlockProps extends BaseBlockProps, WithButtons, WithItemsOfNews, WithDropdownItems {}

// noinspection JSUnusedGlobalSymbols
export default NewsBlock;
