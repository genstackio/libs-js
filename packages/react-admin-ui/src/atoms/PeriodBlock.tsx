import { rich_text } from '../types';
import { Text } from './Text';
import { text_color } from '../mappings/text-colors';

export function PeriodBlock({ color, text, value }: PeriodBlockProps) {
    return (
        <div className={'h-24 border-r-2 border-gray-100 py-2 text-center'}>
            <Text className={'px-2 mb-2'} variant={'title6'} text={text} color={color} />
            <Text variant={'title3'} text={value} color={color} />
        </div>
    );
}

export interface PeriodBlockProps {
    color?: text_color;
    text?: rich_text;
    value?: rich_text;
}
export default PeriodBlock;
