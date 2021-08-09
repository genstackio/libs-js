import clsx from 'clsx';
import Block from './Block';
import { WithHeadingText } from '../withs';
import { AsBlock } from '../as';
import HeadingText from './HeadingText';

export function SectionHeader({
    className,
    color = 'primary',
    title,
    subtitle,
    description,
    variant = 'contained',
    center,
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
            <HeadingText
                title={title}
                subtitle={subtitle}
                description={description}
                center={center}
                variant={'xsection'}
                color={color}
            />
            {children || ''}
        </Block>
    ) : null;
}

export interface SectionHeaderProps extends AsBlock, WithHeadingText {}

// noinspection JSUnusedGlobalSymbols
export default SectionHeader;
