import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';

export function LargeSummaryItemsSection({
    title,
    description,
    items = [],
    color,
    className,
}: LargeSummaryItemsSectionProps) {
    return (
        <Div flex className={clsx('py-14 px-8 sm:py-6 sm:px-4 flex-col', className)}>
            <HeadingText title={title} description={description} variant={'medium2'} center />
            <Div flex className={'grid sm:mt-6 grid-cols-2 gap-x-10 sm:grid-cols-1 sm:gap-x-0'}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Div flex className={'grid grid-cols-3 mt-10'} key={index}>
                        <Image {...image} corner={'rounded'} className={'col-span-1'} expand={false} />
                        <Div className={'col-span-2 pt-1 pl-4'}>
                            <HeadingText
                                title={title}
                                subtitle={subtitle}
                                description={description}
                                variant={'section'}
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
                ))}
            </Div>
        </Div>
    );
}

export interface LargeSummaryItemsSectionProps
    extends AsComponent,
        WithTitle,
        WithDescription,
        WithItems,
        WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default LargeSummaryItemsSection;
