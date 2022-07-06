import Comment, {CommentProps} from "../atoms/Comment";

export function CommentContent(props: CommentContentProps) {
    return (
        <Comment {...props} />
    );
}

export interface CommentContentProps extends CommentProps {
}

export default CommentContent;
