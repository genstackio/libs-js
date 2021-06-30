import { box_color, class_name, rich_text } from '../types';
import { Block } from './Block';
import { Text } from './Text';
import clsx from 'clsx';

export function SectionHeader({ className, color = 'primary', title, subtitle }: SectionHeaderProps) {
    return title || subtitle ? (
        <Block
            padding={'small'}
            elevation={0}
            color={color}
            className={clsx('x-m-small bg-opacity-5', className)}
            variant={'contained'}
            corner={'rounded-small'}
        >
            <Text text={title} color={color} variant={'section'} />
            <Text text={subtitle} color={'dark'} variant={'xsmall'} />
        </Block>
    ) : null;
}

export interface SectionHeaderProps {
    className?: class_name;
    color?: box_color;
    title?: rich_text;
    subtitle?: rich_text;
}

export default SectionHeader;
