import Block from '../atoms/Block';
import Text from '../atoms/Text';
import { WithItemsOfInfos, WithColorOfText } from '../withs';
import { AsComponent } from '../as';

export function Infos({ color = 'primary', items = [], ...props }: InfosProps) {
    return (
        <Block {...props}>
            <Text text="General" variant={'title6'} />
            {items.map(({ label, value }, index) => (
                <div key={index} className="flex justify-between mt-4 ">
                    <Text text={label} className={'text-disabled'} />
                    <Text text={value} color={color} />
                </div>
            ))}
        </Block>
    );
}

export interface InfosProps extends AsComponent, WithColorOfText, WithItemsOfInfos {}

// noinspection JSUnusedGlobalSymbols
export default Infos;
