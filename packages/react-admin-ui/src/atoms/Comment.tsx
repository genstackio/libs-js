import clsx from 'clsx';
import Text from './Text';
import { WithClassName, WithSubtitle, WithTitle, WithMessage } from '../withs';

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

export interface CommentProps extends WithClassName, WithTitle, WithSubtitle, WithMessage {}

export default Comment;
