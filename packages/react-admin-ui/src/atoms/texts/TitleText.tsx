import React from 'react';
import Text, {TextProps} from "../Text";

export function TitleText({level = 1, ...props}: TitleTextProps) {
    return (
        <Text variant={`title${level}` as any} {...props} />
    );
}

export interface TitleTextProps extends Omit<TextProps, 'variant'> {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
}

export default TitleText