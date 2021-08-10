import clsx from 'clsx';
import { WithColorOfText, WithHeadingText, WithMessage } from '../withs';
import { AsComponent } from '../as';
import HeadingText from './HeadingText';

export function Comment({ title, subtitle, center, color, message, className }: CommentProps) {
    return (
        <HeadingText
            title={title}
            subtitle={subtitle}
            description={message}
            variant={'xsmall'}
            center={center}
            color={color || 'dark'}
            className={clsx('p-4', className)}
            headerClassName={'flex items-end'}
            contentClassName={'pt-6'}
            subtitleClassName={'ml-4'}
            descriptionClassName={'leading-7'}
        />
    );
}

export interface CommentProps extends AsComponent, WithColorOfText, WithHeadingText, WithMessage {}

// noinspection JSUnusedGlobalSymbols
export default Comment;
