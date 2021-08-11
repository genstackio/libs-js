import Block from '../atoms/Block';
import Text from '../atoms/Text';
import useBlock from '../hooks/useBlock';
import { AsComponent } from '../as';
import { WithItemsOfInfos, WithColorOfText, WithTitle } from '../withs';

export function Infos({ items = [], title, ...props }: InfosProps) {
    const [bProps] = useBlock(props, { color: 'primary' });
    return (
        <Block {...bProps}>
            <Text text={title} variant={'title6'} />
            {items.map(({ label, value }, index) => (
                <div key={index} className="flex justify-between mt-4 ">
                    <Text text={label} className={'text-disabled'} />
                    <Text text={value} />
                </div>
            ))}
        </Block>
    );
}

export interface InfosProps extends AsComponent, WithTitle, WithColorOfText, WithItemsOfInfos {}

// noinspection JSUnusedGlobalSymbols
export default Infos;
