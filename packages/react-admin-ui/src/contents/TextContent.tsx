import Text, { TextProps } from '../atoms/Text';

export function TextContent(props: TextContentProps) {
    return <Text {...props} />;
}

export type TextContentProps = TextProps;

export default TextContent;
