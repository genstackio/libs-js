import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';

export function SummaryItemsSection({ title, description, items = [], color, className }: SummaryItemsSectionProps) {
    return (
        <Div
            flex
            className={clsx(
                'py-14 px-8 sm:py-6 sm:px-4 flex-row sm:flex-col grid grid-cols-3 sm:grid-cols-1 gap-x-10 sm:gap-x-0',
                className,
            )}
        >
            <HeadingText title={title} description={description} variant={'medium2'} className={'col-span-1'} center />
            <Div flex className={'grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-1 sm:flex-col sm:mt-6 col-span-2'}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Div key={index} className={'sm: pt-8'}>
                        <Div flex className={'flex-col'} center>
                            <Image {...image} corner={'rounded'} className={'w-full max-h-90'} expand={false} />
                            <Div flex className={'justify-between w-full pt-6 flex-col'}>
                                <HeadingText
                                    title={title}
                                    subtitle={subtitle}
                                    description={description}
                                    variant={'section'}
                                    center
                                />
                                {share_icons && (
                                    <ShareIcons
                                        items={share_icons}
                                        className={'max-w-26'}
                                        color={color as box_color}
                                        variant={'none'}
                                    />
                                )}
                            </Div>
                        </Div>
                    </Div>
                ))}
            </Div>
        </Div>
    );
}

export interface SummaryItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default SummaryItemsSection;
