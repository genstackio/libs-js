import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import Div from '../../atoms/Div';
import PeriodBlock from '../../atoms/PeriodBlock';
import Items from '../../atoms/Items';
import useBlock from '../../hooks/useBlock';
import { WithIcon, WithItems } from '../../withs';

export function PeriodFigureBlock({ icon, items = [], ...props }: PeriodFigureBlockProps) {
    const [bProps] = useBlock(props, { p: 'xs' });

    return (
        <Block {...bProps}>
            {icon && (
                <Div grid={items.length + 1} p={'sl'} className={'text-center'}>
                    <Icon icon={icon} />
                    <Items component={PeriodBlock} items={items} />
                </Div>
            )}
        </Block>
    );
}

export interface PeriodFigureBlockProps extends BaseBlockProps, WithIcon, WithItems {}

// noinspection JSUnusedGlobalSymbols
export default PeriodFigureBlock;
