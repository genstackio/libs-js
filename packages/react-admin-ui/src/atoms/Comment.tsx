import clsx from 'clsx';
import Text from './Text';
import { class_name, rich_text } from '../types';

export function Comment({ title, subtitle, message, className }: CommentProps) {
    return (
        <div className={clsx('p-4', className)}>
            <div className={clsx('flex items-end')}>
                <Text variant={'subtitle'} text={title} color={'dark'} />
                <Text variant={'xsmall'} text={subtitle} color={'dark'} className={'ml-4 mb-1'} />
            </div>
            <div className={clsx('pt-6')}>
                <Text variant={'description'} text={message} color={'dark'} className={clsx('leading-7')} />
            </div>
        </div>
    );
}

export interface CommentProps {
    className?: class_name;
    title?: rich_text;
    subtitle?: rich_text;
    message?: rich_text;
}

export default Comment;
