import React from 'react';
import Text, {TextProps} from "../Text";

export function OverlineText(props: OverlineTextProps) {
    return (
        <Text {...props} variant={'overline'} />
    );
}

export interface OverlineTextProps extends Omit<TextProps, 'variant'> {
}

export default OverlineText