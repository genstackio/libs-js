import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';

export function SmallItemsSection({ title, description, items = [], color, className }: SmallItemsSectionProps) {
    return (
        <Div flex className={clsx('py-14 px-8 sm:px-6 flex-col', className)}>
            <HeadingText title={title} description={description} variant={'medium2'} color={color} center />
            <Div flex className={'grid grid-cols-6 gap-y-10 sm:grid-cols-2'}>
                {items.map(({ image, title, subtitle }, index) => (
                    <Div flex key={index} center className={'flex-col mt-10'}>
                        <Image {...image} corner={'circle'} expand={false} className={'w-24 h-24'} />
                        <HeadingText title={title} subtitle={subtitle} variant={'section'} className={'pt-6'} center />
                    </Div>
                ))}
            </Div>
        </Div>
    );
}

export interface SmallItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default SmallItemsSection;
