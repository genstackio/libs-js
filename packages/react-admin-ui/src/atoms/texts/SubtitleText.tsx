import Text, { TextProps } from '../Text';

export function SubtitleText(props: SubtitleTextProps) {
    return <Text {...props} variant={'subtitle'} />;
}

export type SubtitleTextProps = Omit<TextProps, 'variant'>;

export default SubtitleText;
