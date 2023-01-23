import Comment, { CommentProps } from '../atoms/Comment';

export function CommentContent(props: CommentContentProps) {
    return <Comment {...props} />;
}

export type CommentContentProps = CommentProps;

export default CommentContent;
