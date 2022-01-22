import BigInfo from '../atoms/BigInfo';
import Block from '../atoms/Block';
import Div from '../atoms/Div';
import { WithBox, WithItems, WithMargin } from '../withs';

const defaultItems = [];

export function BigInfos({ items = defaultItems, color, variant, m }: BigInfosProps) {
    return (
        <Block elevation={variant === 'contained' ? 0 : 4} color={color} variant={variant} p={'none'} m={m}>
            <Div flex flex1 grid={items.length} center>
                {items.map(({ title, subtitle }, index) => {
                    return (
                        <BigInfo
                            key={index}
                            title={title}
                            subtitle={subtitle}
                            variant={variant}
                            className={index !== items.length - 1 ? 'border-r border-disabled' : ''}
                        />
                    );
                })}
            </Div>
        </Block>
    );
}

export interface BigInfosProps extends WithItems, WithBox, WithMargin {}

export default BigInfos;
