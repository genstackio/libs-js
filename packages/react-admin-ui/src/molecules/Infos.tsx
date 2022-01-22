import Block from '../atoms/Block';
import Text from '../atoms/Text';
import Items from '../atoms/Items';
import InfosItem from '../atoms/InfosItem';
import useBlock from '../hooks/useBlock';
import { AsComponent } from '../as';
import { WithItemsOfInfos, WithColorOfText, WithTitle } from '../withs';

const defaultItems = [];

export function Infos({ items = defaultItems, title, ...props }: InfosProps) {
    const [bProps] = useBlock(props, { color: 'primary' });

    return (
        <Block {...bProps}>
            <Text text={title} variant={'title6'} />
            <Items component={InfosItem} items={items} className={'mb-2 sm:mb-0'} />
        </Block>
    );
}

export interface InfosProps extends AsComponent, WithTitle, WithColorOfText, WithItemsOfInfos {}

// noinspection JSUnusedGlobalSymbols
export default Infos;
