import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';

export function RoundedLargeSummaryItemsSection({
    title,
    description,
    items = [],
    color,
    className,
}: RoundedLargeSummaryItemsSectionProps) {
    return (
        <Div flex className={clsx('py-14 px-8 sm:py-6 sm:px-4 flex-col', className)}>
            <HeadingText title={title} description={description} variant={'medium2'} center />
            <Div flex className={'grid sm:mt-6 grid-cols-3 gap-x-10 sm:grid-cols-1 sm:gap-x-0'}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Div flex className={'flex-col mt-10'} key={index} center>
                        <Image {...image} corner={'circle'} expand={false} />
                        <Div flex className={'flex-col pt-4'} center>
                            <HeadingText title={title} subtitle={subtitle} variant={'section'} center />
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

export interface RoundedLargeSummaryItemsSectionProps
    extends AsComponent,
        WithTitle,
        WithDescription,
        WithItems,
        WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default RoundedLargeSummaryItemsSection;
