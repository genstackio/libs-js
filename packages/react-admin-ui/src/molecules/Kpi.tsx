import clsx from 'clsx';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import { box_color, class_name, icon } from '../types';
import boxClass from '../utils/boxClass';

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

export interface KpiProps {
    className?: class_name;
    icon?: icon;
    name?: string;
    quantity?: number;
    color?: box_color;
}

export default Kpi;
