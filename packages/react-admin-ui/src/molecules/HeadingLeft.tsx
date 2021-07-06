import clsx from 'clsx';
import { class_name, rich_text } from '../types';
import Text from '../atoms/Text';

export function HeadingLeft({ className, title, description }: HeadingLeftProps) {
    return (
        <div className={clsx('space-y-2', className)}>
            <Text text={title} variant={'body'} />
            <Text text={description} variant={'description'} />
        </div>
    );
}

export interface HeadingLeftProps {
    className?: class_name;
    title?: rich_text;
    description?: rich_text;
}

export default HeadingLeft;
