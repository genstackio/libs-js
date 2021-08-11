import clsx from 'clsx';
import Block from './Block';
import { WithHeadingText } from '../withs';
import { AsBlock } from '../as';
import HeadingText from './HeadingText';
import useHeadingText from '../hooks/useHeadingText';

export function SectionHeader({
    className,
    color = 'primary',
    variant = 'contained',
    children,
    ...props
}: SectionHeaderProps) {
    const [htProps, , hasContent] = useHeadingText(props);
    return hasContent ? (
        <Block
            padding={'small'}
            elevation={0}
            color={color}
            className={clsx('m-4 bg-opacity-10', className)}
            variant={variant}
            corner={'rounded-small'}
        >
            <HeadingText {...htProps} variant={'xsection'} color={color} />
            {children || ''}
        </Block>
    ) : null;
}

export interface SectionHeaderProps extends AsBlock, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
