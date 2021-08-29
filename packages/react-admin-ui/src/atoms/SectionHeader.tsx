import clsx from 'clsx';
import Block from './Block';
import HeadingText from './HeadingText';
import useBlock from '../hooks/useBlock';
import useHeadingText from '../hooks/useHeadingText';
import { AsBlock } from '../as';
import { WithHeadingText, WithMargin } from '../withs';

export function SectionHeader({ children, className, ...props }: SectionHeaderProps) {
    const [bProps, rest2] = useBlock(props, { color: 'primary', variant: 'contained', m: 'md', p: 'md' });
    const [htProps, rest, hasContent] = useHeadingText(rest2);

    if (!hasContent) return null;

    return (
        <Block
            corner={'rounded-small'}
            elevation={0}
            {...bProps}
            {...rest}
            className={clsx('bg-opacity-10', className)}
        >
            <HeadingText color={bProps.color} variant={'xsection'} {...htProps} />
            {children || ''}
        </Block>
    );
}

export interface SectionHeaderProps extends AsBlock, WithHeadingText, WithMargin {}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
