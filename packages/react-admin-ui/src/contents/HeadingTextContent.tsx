import HeadingText, { HeadingTextProps } from '../atoms/HeadingText';

export function HeadingTextContent(props: HeadingTextContentProps) {
    return <HeadingText {...props} />;
}

export type HeadingTextContentProps = HeadingTextProps;

export default HeadingTextContent;
