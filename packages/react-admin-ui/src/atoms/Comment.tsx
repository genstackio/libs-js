import HeadingText, { HeadingTextProps } from './HeadingText';
import useHeadingText from '../hooks/useHeadingText';

export function Comment({ className, color, ...props }: CommentProps) {
    const [htProps] = useHeadingText(props);

    return (
        <HeadingText
            color={color || 'dark'}
            contentClassName={'pt-6'}
            descriptionClassName={'leading-7'}
            headerClassName={'flex items-center'}
            p={'md'}
            subtitleClassName={'ml-4'}
            variant={'xsmall'}
            {...htProps}
            className={className}
        />
    );
}

export type CommentProps = HeadingTextProps;

// noinspection JSUnusedGlobalSymbols
export default Comment;
