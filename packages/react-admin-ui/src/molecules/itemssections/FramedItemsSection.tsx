import { WithBox, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';
import { Block } from '../../atoms/Block';
import ShareIcons from '../ShareIcons';

export function FramedItemsSection({
    title,
    description,
    items = [],
    color,
    className,
    variant,
}: FramedItemsSectionProps) {
    return (
        <Block className={clsx('flex py-14 px-8 sm:px-4 flex-col', className)} color={color} variant={variant}>
            <HeadingText title={title} description={description} variant={'medium2'} center />
            <Div flex className={'grid grid-cols-3 gap-x-10 sm:grid-cols-1 sm:flex-col mt-10 sm:mt-6'}>
                {items.map(({ image, title, subtitle, share_icons }, index) => (
                    <Block key={index} corner={'rounded'} variant={variant}>
                        <Div flex className={'flex-col'} center>
                            <Image {...image} corner={'circle'} expand={false} className={'w-30 h-30'} />
                            <Div flex className={'justify-between w-full pt-6 sm:flex-col'}>
                                <HeadingText
                                    title={title}
                                    subtitle={subtitle}
                                    variant={'section'}
                                    className={'pt-4 sm:text-center'}
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
                    </Block>
                ))}
            </Div>
        </Block>
    );
}

export interface FramedItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithBox {}

// noinspection JSUnusedGlobalSymbols
export default FramedItemsSection;
