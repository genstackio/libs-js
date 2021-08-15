import Div from './Div';
import Text from './Text';
import Icon from './Icon';
import { WithClassName, WithColorOfText, WithIcon, WithValue } from '../withs';

export function SummariesItem({ key, percentage, unit, value, color = 'dark', className }: SummariesItemProps) {
    return (
        <Div center className={className} key={key}>
            <Div flex center>
                <Text text={`${percentage}` + ' %'} variant={'description'} className={'text-center'} />
                {percentage > 0 && <Icon icon={'keyboard_arrow_up'} />}
                {percentage < 0 && <Icon icon={'keyboard_arrow_down'} />}
            </Div>
            <Text text={unit} color={color} variant={'description'} />
            <Text text={value} color={color} variant={'title6'} />
        </Div>
    );
}

export interface SummariesItemProps extends WithValue, WithColorOfText, WithIcon, WithClassName {
    key?: number;
    unit?: string;
    value?: string;
    percentage: number;
}

export default SummariesItem;
