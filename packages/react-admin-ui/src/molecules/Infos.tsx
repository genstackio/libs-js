import { text_color, class_name, infos_item } from '../types';
import Block from '../atoms/Block';
import Text from '../atoms/Text';

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

export interface InfosProps {
    className?: class_name;
    color?: text_color;
    items?: infos_item[];
}

export default Infos;
