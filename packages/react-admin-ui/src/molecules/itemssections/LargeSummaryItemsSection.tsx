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

export function LargeSummaryItemsSection({
    className,
    color,
    description,
    items = defaultItems,
    title,
}: LargeSummaryItemsSectionProps) {
    return (
        <Column flex px={'_xl'} className={clsx('py-6 sm:py-14', className)}>
            <HeadingText center description={description} title={title} variant={'medium2'} />
            <Div flex grid={2} mt={'_lg'} className={'gap-x-0 sm:gap-x-10'}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Div flex grid={3} key={index} mt={'_sl'}>
                        <Image corner={'rounded'} expand={false} {...image} className={'w-full sm:w-auto col-span-1'} />
                        <Div className={'col-span-2 pt-1 pl-4'}>
                            <HeadingText
                                description={description}
                                subtitle={subtitle}
                                title={title}
                                variant={'section'}
                            />
                            {share_icons && (
                                <ShareIcons
                                    color={color as box_color}
                                    items={share_icons}
                                    variant={'none'}
                                    className={'max-w-26'}
                                />
                            )}
                        </Div>
                    </Div>
                ))}
            </Div>
        </Column>
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
