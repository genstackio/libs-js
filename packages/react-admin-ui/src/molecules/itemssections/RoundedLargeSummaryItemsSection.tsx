import clsx from 'clsx';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function RoundedLargeSummaryItemsSection({
    className,
    color,
    description,
    title,
    items = defaultItems,
}: RoundedLargeSummaryItemsSectionProps) {
    return (
        <Column px={'_xl'} className={clsx('py-6 sm:py-14', className)}>
            <HeadingText center description={description} title={title} variant={'medium2'} />
            <Div flex grid={3} className={'sm:mt-6 gap-x-0 sm:gap-x-10'}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Column center key={index} mt={'sl'}>
                        <Image corner={'circle'} expand={false} {...image} />
                        <Column center pt={'md'}>
                            <HeadingText center subtitle={subtitle} title={title} variant={'section'} />
                            {share_icons && (
                                <ShareIcons
                                    color={color as box_color}
                                    items={share_icons}
                                    variant={'none'}
                                    className={'max-w-26'}
                                />
                            )}
                        </Column>
                    </Column>
                ))}
            </Div>
        </Column>
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
