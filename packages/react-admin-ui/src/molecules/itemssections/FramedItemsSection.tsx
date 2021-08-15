import clsx from 'clsx';
import Row from '../../atoms/Row';
import Image from '../../atoms/Image';
import { Block } from '../../atoms/Block';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import ShareIcons from '../ShareIcons';
import { AsComponent } from '../../as';
import { WithBox, WithDescription, WithItems, WithTitle } from '../../withs';

export function FramedItemsSection({
    className,
    color,
    description,
    items = [],
    title,
    variant,
}: FramedItemsSectionProps) {
    return (
        <Block color={color} variant={variant} className={clsx('flex px-4 py-14 sm:px-8 flex-col', className)}>
            <HeadingText center description={description} title={title} variant={'medium2'} />
            <Row grid={3} className={'gap-x-10 mt-6 sm:mt-10'}>
                {items.map(({ image, title, subtitle, share_icons }, index) => (
                    <Block corner={'rounded'} key={index} variant={variant}>
                        <Column center>
                            <Image {...image} corner={'circle'} expand={false} className={'w-30 h-30'} />
                            <Row full pt={'lg'} spaced>
                                <HeadingText
                                    center
                                    subtitle={subtitle}
                                    title={title}
                                    variant={'section'}
                                    className={'pt-4 sm:text-left'}
                                />
                                {share_icons && (
                                    <ShareIcons
                                        color={color}
                                        items={share_icons}
                                        variant={'none'}
                                        className={'max-w-26'}
                                    />
                                )}
                            </Row>
                        </Column>
                    </Block>
                ))}
            </Row>
        </Block>
    );
}

export interface FramedItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithBox {}

// noinspection JSUnusedGlobalSymbols
export default FramedItemsSection;
