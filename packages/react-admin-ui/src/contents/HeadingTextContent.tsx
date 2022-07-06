import HeadingText, {HeadingTextProps} from "../atoms/HeadingText";

export function HeadingTextContent(props: HeadingTextContentProps) {
    return (
        <HeadingText {...props} />
    );
}

export interface HeadingTextContentProps extends HeadingTextProps {
}

export default HeadingTextContent;
