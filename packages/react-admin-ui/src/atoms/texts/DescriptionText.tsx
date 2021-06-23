import Text, { TextProps } from '../Text';

export function DescriptionText(props: DescriptionTextProps) {
    return <Text {...props} variant={'description'} />;
}

export type DescriptionTextProps = Omit<TextProps, 'variant'>;

export default DescriptionText;
