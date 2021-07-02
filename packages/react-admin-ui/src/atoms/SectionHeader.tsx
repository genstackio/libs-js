import clsx from 'clsx';
import { block_variant, box_color, class_name, rich_text } from '../types';
import Block from './Block';
import Text from './Text';

export function SectionHeader({
    className,
    color = 'primary',
    title,
    subtitle,
    variant = 'contained',
}: SectionHeaderProps) {
    return title || subtitle ? (
        <Block
            padding={'small'}
            elevation={0}
            color={color}
            className={clsx('m-4 bg-opacity-5', className)}
            variant={variant}
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
    variant?: block_variant;
}

export default SectionHeader;
