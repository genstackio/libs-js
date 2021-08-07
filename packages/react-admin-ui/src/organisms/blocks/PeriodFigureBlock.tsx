import clsx from 'clsx';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import PeriodBlock from '../../atoms/PeriodBlock';
import Items from '../../atoms/Items';
import { WithIcon, WithItems } from '../../withs';
import gridColsClass from '../../mappings/grid-cols';

export function PeriodFigureBlock({ icon, items = [], ...props }: PeriodFigureBlockProps) {
    return (
        <Block {...props}>
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
