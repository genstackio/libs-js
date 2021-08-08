import Text, { TextProps } from '../Text';

export function OverlineText(props: OverlineTextProps) {
    return <Text {...props} variant={'overline'} />;
}

export type OverlineTextProps = Omit<TextProps, 'variant'>;

// noinspection JSUnusedGlobalSymbols
export default OverlineText;
