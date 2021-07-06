import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import PeriodBlock from '../../atoms/PeriodBlock';
import { icon } from '../../types';

export function PeriodFigureBlock({ icon, items = [], ...props }: PeriodFigureBlockProps) {
    return (
        <Block {...props}>
            {icon && (
                <div className={'p-10 grid text-center grid-cols-' + `${items.length + 1}`}>
                    <Icon icon={icon} />
                    {items.map((item, index) => (
                        <PeriodBlock key={index} text={item.text} value={item.value} />
                    ))}
                </div>
            )}
        </Block>
    );
}

export interface PeriodFigureBlockProps extends BaseBlockProps {
    icon?: icon;
    items?: any[];
}

export default PeriodFigureBlock;
