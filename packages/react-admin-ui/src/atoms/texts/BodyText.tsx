import React from 'react';
import Text, {TextProps} from "../Text";

export function BodyText(props: BodyTextProps) {
    return (
        <Text {...props} variant={'body'} />
    );
}

export interface BodyTextProps extends Omit<TextProps, 'variant'> {
}

export default BodyText