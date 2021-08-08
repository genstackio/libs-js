import Text, { TextProps } from '../Text';

export function BodyText(props: BodyTextProps) {
    return <Text {...props} variant={'body'} />;
}

export type BodyTextProps = Omit<TextProps, 'variant'>;

// noinspection JSUnusedGlobalSymbols
export default BodyText;
