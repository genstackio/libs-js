import { text_color, class_name, infos_item } from '../types';
import { Block, Text } from '../atoms';

export function Infos({ color = 'primary', items = [], ...props }: InfosProps) {
    return (
        <Block {...props}>
            <Text text="General" variant={'title6'} />
            {items.map(({ label, value }, index) => (
                <div key={index} className="flex justify-between mt-4 ">
                    <Text text={label} className={'text-gray-300'} />
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
