import clsx from 'clsx';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function SmallItemsSection({
    className,
    color,
    description,
    items = defaultItems,
    title,
}: SmallItemsSectionProps) {
    return (
        <Column className={clsx('py-14 px-6 sm:px-8', className)}>
            <HeadingText center color={color} description={description} title={title} variant={'medium2'} />
            <Div grid={6} className={'gap-y-10'}>
                {items.map(({ image, title, subtitle }, index) => (
                    <Column center key={index} mt={'sl'}>
                        <Image corner={'circle'} expand={false} {...image} className={'w-24 h-24'} />
                        <HeadingText center pt={'lg'} subtitle={subtitle} title={title} variant={'section'} />
                    </Column>
                ))}
            </Div>
        </Column>
    );
}

export interface SmallItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default SmallItemsSection;
