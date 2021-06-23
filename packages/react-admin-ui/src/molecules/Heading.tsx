import { rich_text } from '../types';
import Text from '../atoms/Text';
import { text_color } from '../mappings/text-colors';

export function Heading({ text, color }: HeadingProps) {
    return (
        <div className={'flex justify-between items-center border-b-2 my-8'}>
            <div className={'flex-col my-8'}>
                <Text className={'flex-1'} color={color} text={text} variant={'title5'} />
            </div>
        </div>
    );
}

export interface HeadingProps {
    text?: rich_text;
    color?: text_color;
}

export default Heading;
