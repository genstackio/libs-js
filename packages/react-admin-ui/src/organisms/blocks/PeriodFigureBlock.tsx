import clsx from 'clsx';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import PeriodBlock from '../../atoms/PeriodBlock';
import Items from '../../atoms/Items';
import gridColsClass from '../../mappings/grid-cols';
import useBlock from '../../hooks/useBlock';
import { WithIcon, WithItems } from '../../withs';

export function PeriodFigureBlock({ icon, items = [], ...props }: PeriodFigureBlockProps) {
    const [bProps] = useBlock(props);

    return (
        <Block {...bProps}>
            {icon && (
                <div className={clsx('p-10 grid text-center', gridColsClass(items.length + 1))}>
                    <Icon icon={icon} />
                    <Items items={items} component={PeriodBlock} />
                </div>
            )}
        </Block>
    );
}

export interface PeriodFigureBlockProps extends BaseBlockProps, WithIcon, WithItems {}

// noinspection JSUnusedGlobalSymbols
export default PeriodFigureBlock;
