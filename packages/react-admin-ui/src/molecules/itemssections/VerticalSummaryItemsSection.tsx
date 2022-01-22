import clsx from 'clsx';
import Div from '../../atoms/Div';
import Row from '../../atoms/Row';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import ShareIcons from '../ShareIcons';
import { box_color } from '../../mappings/box-colors';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function VerticalSummaryItemsSection({
    className,
    color,
    description,
    items = defaultItems,
    title,
}: VerticalSummaryItemsSectionProps) {
    return (
        <Row grid={3} className={clsx('sm:py-14 sm:px-8 py-6 px-4 sm:gap-x-10 gap-x-0', className)}>
            <HeadingText center description={description} span={1} title={title} variant={'medium2'} />
            <Column mt={'_lg'} span={2}>
                {items.map(({ image, title, subtitle, share_icons, description }, index) => (
                    <Div flex grid={3} key={index} mt={'sl'}>
                        <Image corner={'rounded'} {...image} className={'col-span-1'} />
                        <Div pl={'md'} pt={'xs'} span={2}>
                            <HeadingText
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
                        </Div>
                    </Div>
                ))}
            </Column>
        </Row>
    );
}

export interface VerticalSummaryItemsSectionProps
    extends AsComponent,
        WithTitle,
        WithDescription,
        WithItems,
        WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default VerticalSummaryItemsSection;
