import clsx from 'clsx';
import Block from './Block';
import HeadingText from './HeadingText';
import useHeadingText from '../hooks/useHeadingText';
import marginClass from '../mappings/margins';
import { AsBlock } from '../as';
import { WithHeadingText, WithMargin } from '../withs';

export function SectionHeader({
    children,
    className,
    color = 'primary',
    m = 'md',
    variant = 'contained',
    ...props
}: SectionHeaderProps) {
    const [htProps, , hasContent] = useHeadingText(props);

    if (!hasContent) return null;

    return (
        <Block
            color={color}
            corner={'rounded-small'}
            elevation={0}
            p={'md'}
            variant={variant}
            className={clsx('bg-opacity-10', marginClass(m), className)}
        >
            <HeadingText color={color} variant={'xsection'} {...htProps} />
            {children || ''}
        </Block>
    );
}

export interface SectionHeaderProps extends AsBlock, WithHeadingText, WithMargin {}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
