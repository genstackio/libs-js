import clsx from 'clsx';
import Block from './Block';
import HeadingText from './HeadingText';
import useBlock from '../hooks/useBlock';
import useHeadingText from '../hooks/useHeadingText';
import { AsBlock } from '../as';
import {WithHeadingText, WithMargin, WithOnClick} from '../withs';

export function SectionHeader({ active = false, children, hoverable, className, ...props }: SectionHeaderProps) {
    const [bProps, rest2] = useBlock(props, { color: active ? 'secondary' : 'primary', variant: 'contained', m: 'md', p: 'md' });
    const [htProps, rest, hasContent] = useHeadingText(rest2);

    if (!hasContent) return null;

    return (
        <Block
            corner={'rounded-small'}
            elevation={0}
            {...bProps}
            {...rest}
            className={clsx('bg-opacity-10', className, hoverable && 'hover:bg-opacity-20')}
        >
            <HeadingText color={bProps.color} variant={'xsection'} {...htProps} />
            {children || ''}
        </Block>
    );
}

export interface SectionHeaderProps extends AsBlock, WithHeadingText, WithMargin, WithOnClick {
    hoverable?: boolean;
    active?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
