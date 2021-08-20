import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Icon from '../../atoms/Icon';
import { Block } from '../../atoms/Block';
import Panel from '../../atoms/Panel';
import ShareIcons from '../ShareIcons';
import { AsComponent } from '../../as';
import { WithBox, WithDescription, WithItems, WithTitle } from '../../withs';

export function IconedItemsSection({
    color,
    description,
    items = [],
    title,
    variant,
    className,
}: IconedItemsSectionProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Block
            className={clsx('flex py-14 px-8 sm:px-4 flex-col', className)}
            color={color}
            padding={isMobile ? 'xsmall' : 'small'}
            variant={variant}
        >
            <HeadingText title={title} description={description} variant={'medium2'} center />
            <Div flex className={'grid grid-cols-3 gap-x-10 sm:grid-cols-1 sm:flex-col mt-10 sm:mt-16'}>
                {items.map(({ image, title, share_icons, icon, iconSize, description }, index) => (
                    <Panel
                        key={index}
                        variant={variant == 'contained' ? 'filled' : 'outlined'}
                        className={'rounded-2xl sm:mt-10'}
                        color={color}
                    >
                        <Div flex className={'flex-col -mt-10'} center>
                            <Panel
                                variant={variant == 'contained' ? 'filled' : 'contained'}
                                color={color}
                                className={'rounded-2xl'}
                            >
                                <Icon icon={icon} iconSize={iconSize} />
                            </Panel>
                            <Div flex center className={'justify-between w-full flex-col'}>
                                <HeadingText
                                    title={title}
                                    center
                                    description={description}
                                    variant={'section'}
                                    className={'pt-4'}
                                />
                                {share_icons && (
                                    <ShareIcons
                                        items={share_icons}
                                        className={'max-w-26'}
                                        color={color}
                                        variant={'none'}
                                    />
                                )}
                            </Div>
                        </Div>
                    </Panel>
                ))}
            </Div>
        </Block>
    );
}

export interface IconedItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithBox {}

// noinspection JSUnusedGlobalSymbols
export default IconedItemsSection;
