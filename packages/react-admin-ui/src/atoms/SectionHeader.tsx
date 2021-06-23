import {box_color, rich_text} from '../types';
import {Block} from "./Block";
import {Text} from "./Text";

export function SectionHeader({color = 'primary', title, subtitle}: SectionHeaderProps) {
    return (title || subtitle) ? (
        <Block padding={'small'} elevation={0} color={color} className={'x-m-small bg-opacity-5'} variant={'contained'} corner={'rounded-small'}>
            <Text text={title} color={color} variant={'section'} />
            <Text text={subtitle} color={'dark'} variant={'xsmall'} />
        </Block>
    ) : null;
}

export interface SectionHeaderProps {
    color?: box_color,
    title?: rich_text,
    subtitle?: rich_text,
}

export default SectionHeader
