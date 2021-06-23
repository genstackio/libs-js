import { rich_text } from '../types';
import { Text } from '../atoms/Text';

export function HeadingLeft({ title, description }: HeadingLeftProps) {
    return (
        <div className={'space-y-2'}>
            <Text text={title} variant={'body'} />
            <Text text={description} variant={'description'} />
        </div>
    );
}

export interface HeadingLeftProps {
    title?: rich_text;
    description?: rich_text;
}

export default HeadingLeft;
