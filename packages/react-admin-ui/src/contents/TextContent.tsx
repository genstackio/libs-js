import Text, {TextProps} from "../atoms/Text";

export function TextContent(props: TextContentProps) {
    return (
        <Text {...props} />
    );
}

export interface TextContentProps extends TextProps {
}

export default TextContent;
