import Text, { TextProps } from '../Text';
import { WithLevel } from '../../withs';

export function TitleText({ level = 1, ...props }: TitleTextProps) {
    return <Text variant={`title${level}` as any} {...props} />;
}

export interface TitleTextProps extends Omit<TextProps, 'variant'>, WithLevel {}

// noinspection JSUnusedGlobalSymbols
export default TitleText;
