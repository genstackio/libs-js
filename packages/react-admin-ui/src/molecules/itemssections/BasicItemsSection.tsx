import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';
import HeadingText from '../../atoms/HeadingText';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import { AsComponent } from '../../as';
import clsx from 'clsx';

export function BasicItemsSection({ title, description, items = [], color, className }: BasicItemsSectionProps) {
    return (
        <Div flex className={clsx('grid grid-cols-3 py-14 px-8 sm:flex-col sm:grid-cols-1', className)}>
            <HeadingText
                title={title}
                description={description}
                className={'col-span-1'}
                variant={'medium2'}
                color={color}
                center
            />
            <Div className={'col-span-2 sm:mt-10'}>
                <Div flex className={'grid grid-cols-2 gap-y-10 sm:grid-cols-1'}>
                    {items.map(({ image, title, subtitle }, index) => (
                        <Div flex key={index} center>
                            <Image {...image} corner={'circle'} expand={false} className={'w-24 h-24'} />
                            <HeadingText title={title} subtitle={subtitle} variant={'section'} className={'pl-8'} />
                        </Div>
                    ))}
                </Div>
            </Div>
        </Div>
    );
}

export interface BasicItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default BasicItemsSection;
