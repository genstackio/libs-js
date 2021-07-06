import clsx from 'clsx';
import { class_name, rich_text } from '../types';
import Text from '../atoms/Text';
import { text_color } from '../mappings/text-colors';

export function Heading({ className, text, color }: HeadingProps) {
    return (
        <div className={clsx('flex justify-between items-center border-b-2 my-8', className)}>
            <div className={'flex-col my-8'}>
                <Text className={'flex-1'} color={color} text={text} variant={'title5'} />
            </div>
        </div>
    );
}

export interface HeadingProps {
    className?: class_name;
    text?: rich_text;
    color?: text_color;
}

export default Heading;
