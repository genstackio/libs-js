import clsx from 'clsx';
import Block from './Block';
import Text from './Text';
import { WithColorOfBox, WithClassName, WithSubtitle, WithTitle, WithVariantOfBlock } from '../withs';

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
            className={clsx('m-4 bg-opacity-10', className)}
            variant={variant}
            corner={'rounded-small'}
        >
            <Text text={title} color={color} variant={'section'} />
            <Text text={subtitle} color={'dark'} variant={'xsmall'} />
        </Block>
    ) : null;
}

export interface SectionHeaderProps
    extends WithClassName,
        WithTitle,
        WithSubtitle,
        WithColorOfBox,
        WithVariantOfBlock {}

export default SectionHeader;
