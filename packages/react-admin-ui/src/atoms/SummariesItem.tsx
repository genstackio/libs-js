import Text from './Text';
import Icon from './Icon';
import { WithClassName, WithColorOfText, WithIcon, WithValue } from '../withs';
import clsx from 'clsx';

export function SummariesItem({ key, percentage, unit, value, color = 'dark', className }: SummariesItemProps) {
    return (
        <div className={clsx('text-center', className)} key={key}>
            <div className={'flex justify-center'}>
                <Text text={`${percentage}` + ' %'} variant={'description'} className={'text-center'} />
                {percentage > 0 && <Icon icon={'keyboard_arrow_up'} />}
                {percentage < 0 && <Icon icon={'keyboard_arrow_down'} />}
            </div>
            <Text text={unit} color={color} variant={'description'} />
            <Text text={value} color={color} variant={'title6'} />
        </div>
    );
}

export interface SummariesItemProps extends WithValue, WithColorOfText, WithIcon, WithClassName {
    key?: number;
    unit?: string;
    value?: string;
    percentage: number;
}

export default SummariesItem;
