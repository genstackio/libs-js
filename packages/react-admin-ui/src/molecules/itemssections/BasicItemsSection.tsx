import clsx from 'clsx';
import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

export function BasicItemsSection({ className, color, description, items = [], title }: BasicItemsSectionProps) {
    return (
        <Column grid={3} className={clsx('py-14 px-8', className)}>
            <HeadingText
                center
                color={color}
                description={description}
                title={title}
                variant={'medium2'}
                className={'col-span-1'}
            />
            <Div mt={'_sl'} className={'col-span-2'}>
                <Div flex grid={2} className={'gap-y-10'}>
                    {items.map(({ image, title, subtitle }, index) => (
                        <Div center flex key={index}>
                            <Image corner={'circle'} expand={false} {...image} className={'w-24 h-24'} />
                            <HeadingText subtitle={subtitle} title={title} variant={'section'} className={'pl-8'} />
                        </Div>
                    ))}
                </Div>
            </Div>
        </Column>
    );
}

export interface BasicItemsSectionProps extends AsComponent, WithTitle, WithDescription, WithItems, WithColorOfText {}

// noinspection JSUnusedGlobalSymbols
export default BasicItemsSection;
