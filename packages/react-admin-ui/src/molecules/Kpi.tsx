import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import boxClass from '../utils/boxClass';
import { AsComponent } from '../as';
import { WithColorOfBox, WithIcon, WithQuantity, WithName } from '../withs';

export function Kpi({ className, icon, name, quantity, color }: KpiProps) {
    return (
        <Div center flex spaced={6} className={className}>
            <div className={clsx(boxClass({ color }))}>
                <Icon icon={icon} />
            </div>
            {quantity && (
                <div>
                    <Text color={color} text={name} variant={'description'} />
                    <Text color={color} text={`${quantity}`} variant={'title5'} />
                </div>
            )}
        </Div>
    );
}

export interface KpiProps extends AsComponent, WithName, WithIcon, WithQuantity, WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default Kpi;
