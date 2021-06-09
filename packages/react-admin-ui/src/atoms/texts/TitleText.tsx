import Text, {TextProps} from "../Text";
import {level} from "../../types";

export function TitleText({level = 1, ...props}: TitleTextProps) {
    return (
        <Text variant={`title${level}` as any} {...props} />
    );
}

export interface TitleTextProps extends Omit<TextProps, 'variant'> {
    level?: level,
}

export default TitleText
