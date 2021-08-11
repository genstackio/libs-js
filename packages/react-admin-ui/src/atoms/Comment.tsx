import clsx from 'clsx';
import { WithColorOfText, WithHeadingText } from '../withs';
import { AsComponent } from '../as';
import HeadingText from './HeadingText';
import useHeadingText from '../hooks/useHeadingText';

export function Comment({ color, className, ...props }: CommentProps) {
    const [htProps] = useHeadingText(props);
    return (
        <HeadingText
            {...htProps}
            variant={'xsmall'}
            color={color || 'dark'}
            className={clsx('p-4', className)}
            headerClassName={'flex items-end'}
            contentClassName={'pt-6'}
            subtitleClassName={'ml-4'}
            descriptionClassName={'leading-7'}
        />
    );
}

export interface CommentProps extends AsComponent, WithColorOfText, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default Comment;
