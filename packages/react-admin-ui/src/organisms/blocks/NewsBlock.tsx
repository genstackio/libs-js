import Block, { BaseBlockProps } from '../../atoms/Block';
import Button from '../../atoms/Button';
import { WithButtonLabel, WithDropdownItems, WithItemsOfNews } from '../../withs';
import NewsBlockItem from '../../molecules/NewsBlockItem';
import { Items } from '../../atoms';

export function NewsBlock({ items = [], btnLabel, ...props }: NewsBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            <Items items={items} component={NewsBlockItem} />
            <Button color={props.color} container containerClassName={'flex justify-center mt-4 xs:mt-2'}>
                {btnLabel}
            </Button>
        </Block>
    );
}

export interface NewsBlockProps extends BaseBlockProps, WithButtonLabel, WithItemsOfNews, WithDropdownItems {}

// noinspection JSUnusedGlobalSymbols
export default NewsBlock;
