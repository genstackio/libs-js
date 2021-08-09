import clsx from 'clsx';
import Block from './Block';
import Text from './Text';
import { WithSubtitle, WithTitle } from '../withs';
import { AsBlock } from '../as';

export function SectionHeader({
    className,
    color = 'primary',
    title,
    subtitle,
    variant = 'contained',
    children,
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
            {children || ''}
        </Block>
    ) : null;
}

export interface SectionHeaderProps extends AsBlock, WithTitle, WithSubtitle {}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
