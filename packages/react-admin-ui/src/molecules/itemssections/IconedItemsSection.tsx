import clsx from 'clsx';
import HeadingText from '../../atoms/HeadingText';
import Icon from '../../atoms/Icon';
import Row from '../../atoms/Row';
import { Block } from '../../atoms/Block';
import Panel from '../../atoms/Panel';
import Column from '../../atoms/Column';
import ShareIcons from '../ShareIcons';
import useBlock from '../../hooks/useBlock';
import { AsComponent } from '../../as';
import { WithBox, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function IconedItemsSection({
    className,
    description,
    items = defaultItems,
    title,
    ...props
}: IconedItemsSectionProps) {
    const [bProps] = useBlock(props);

    return (
        <Block className={clsx('flex py-14 px-8 sm:px-4 flex-col', className)} p={'_sm'} {...bProps}>
            <HeadingText center description={description} title={title} variant={'medium2'} />
            <Row grid={3} className={'gap-y-10 sm:gap-x-10 mt-10 sm:mt-16'}>
                {items.map(({ image, title, share_icons, icon, iconSize, description }, index) => (
                    <Panel
                        key={index}
                        variant={bProps.variant == 'contained' ? 'filled' : 'outlined'}
                        color={bProps.color}
                        className={'rounded-2xl sm:mt-10'}
                    >
                        <Column center className={'-mt-10'}>
                            <Panel
                                color={bProps.color}
                                corner={'rounded'}
                                variant={bProps.variant == 'contained' ? 'filled' : 'contained'}
                            >
                                <Icon icon={icon} iconSize={iconSize} />
                            </Panel>
                            <Column center full spacebetween>
                                <HeadingText
                                    center
                                    description={description}
                                    title={title}
                                    variant={'section'}
                                    className={'pt-4'}
                                />
                                {share_icons && (
                                    <ShareIcons
                                        items={share_icons}
                                        variant={'none'}
                                        className={'max-w-26'}
                                        color={bProps.color}
                                    />
                                )}
                            </Column>
                        </Column>
                    </Panel>
                ))}
            </Row>
        </Block>
    );
}

export interface IconedItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithBox {}

// noinspection JSUnusedGlobalSymbols
export default IconedItemsSection;
