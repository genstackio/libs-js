import clsx from 'clsx';
import Row from '../../atoms/Row';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function SummaryItemsSection({ className, color, description, items = defaultItems, title }: SummaryItemsSectionProps) {
    return (
        <Row grid={3} className={clsx('sm:py-14 sm:px-8 py-6 px-4 sm:gap-x-10 gap-x-0', className)}>
            <HeadingText center description={description} span={1} title={title} variant={'medium2'} />
            <Row gap={10} grid={2} mt={'_lg'} span={2}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Column key={index} className={'pt-8'}>
                        <Column center>
                            <Image corner={'rounded'} expand={false} {...image} className={'w-full max-h-90'} />
                            <Column full pt={'lg'} spacebetween>
                                <HeadingText
                                    center
                                    description={description}
                                    subtitle={subtitle}
                                    title={title}
                                    variant={'section'}
                                />
                                <ShareIcons
                                    color={color as box_color}
                                    items={share_icons}
                                    variant={'none'}
                                    className={'max-w-26'}
                                />
                            </Column>
                        </Column>
                    </Column>
                ))}
            </Row>
        </Row>
    );
}

export interface SummaryItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default SummaryItemsSection;
