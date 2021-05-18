import Text, {TextProps} from "../Text";

export function SubtitleText(props: SubtitleTextProps) {
    return (
        <Text {...props} variant={'subtitle'} />
    );
}

export interface SubtitleTextProps extends Omit<TextProps, 'variant'> {
}

export default SubtitleText