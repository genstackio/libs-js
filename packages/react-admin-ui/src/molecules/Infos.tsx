import Block from '../atoms/Block';
import Text from '../atoms/Text';
import useBlock from '../hooks/useBlock';
import { AsComponent } from '../as';
import { WithItemsOfInfos, WithColorOfText, WithTitle } from '../withs';
import { InfosItem } from '../atoms/InfosItem';

export function Infos({ items = [], title, ...props }: InfosProps) {
    const [bProps] = useBlock(props, { color: 'primary' });
    return (
        <Block {...bProps}>
            <Text text={title} variant={'title6'} />
            {items.map(({ label, value }, index) => (
                <InfosItem label={label} value={value} key={index} />
            ))}
        </Block>
    );
}

export interface InfosProps extends AsComponent, WithTitle, WithColorOfText, WithItemsOfInfos {}

// noinspection JSUnusedGlobalSymbols
export default Infos;
