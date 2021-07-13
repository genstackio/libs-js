import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import boxClass from '../utils/boxClass';
import { WithBoxColor, WithClassName, WithIcon, WithQuantity } from '../withs';

export function Kpi({ className, icon, name, quantity, color }: KpiProps) {
    return (
        <div className={clsx('flex items-center space-x-6', className)}>
            <div className={clsx(boxClass({ color }))}>
                <Icon icon={icon} />
            </div>
            {quantity && (
                <div>
                    <Text text={name} variant={'description'} color={color} />
                    <Text text={`${quantity}`} variant={'title5'} color={color} />
                </div>
            )}
        </div>
    );
}

export interface KpiProps extends WithClassName, WithIcon, WithQuantity, WithBoxColor {
    name?: string;
}

export default Kpi;
