import clsx from 'clsx';
import Block, { BaseBlockProps } from '../../atoms/Block';
import Icon from '../../atoms/Icon';
import Row from '../../atoms/Row';
import Div from '../../atoms/Div';
import Kpi from '../../molecules/Kpi';
import useBlock from '../../hooks/useBlock';
import useActivator from '../../hooks/useActivator';
import { icon } from '../../types';
import { WithIcon, WithName, WithQuantity } from '../../withs';

export function KpiBlock({ bgIcon, icon, name, quantity, ...props }: KpiBlockProps) {
    const [bProps] = useBlock(props);
    const [isHover, onHover, onLeave] = useActivator(false);

    return (
        <Block {...bProps}>
            <Row center onMouseOver={onHover} onMouseLeave={onLeave} spaced>
                <Kpi color={props.color} icon={icon} name={name} quantity={quantity} />
                {bgIcon && (
                    <Div absolute className={clsx('-right-5', isHover && 'transform -rotate-12 scale-110')}>
                        <Icon icon={bgIcon} />
                    </Div>
                )}
            </Row>
        </Block>
    );
}

export interface KpiBlockProps extends BaseBlockProps, WithIcon, WithQuantity, WithName {
    bgIcon?: icon;
}

// noinspection JSUnusedGlobalSymbols
export default KpiBlock;
