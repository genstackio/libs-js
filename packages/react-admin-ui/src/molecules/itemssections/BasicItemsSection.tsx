import Div from '../../atoms/Div';
import Image from '../../atoms/Image';
import Column from '../../atoms/Column';
import HeadingText from '../../atoms/HeadingText';
import { AsComponent } from '../../as';
import { WithColorOfText, WithDescription, WithItems, WithTitle } from '../../withs';

const defaultItems = [];

export function BasicItemsSection({ className, color, description, items = defaultItems, title }: BasicItemsSectionProps) {
    return (
        <Column grid={3} px={'_xl'} py={'hl'} className={className}>
            <HeadingText center span={1} color={color} description={description} title={title} variant={'medium2'} />
            <Div mt={'_sl'} span={2}>
                <Div flex grid={2} className={'gap-y-10'}>
                    {items.map(({ image, title, subtitle }, index) => (
                        <Div center flex key={index}>
                            <Image corner={'circle'} expand={false} size={'lg'} {...image} />
                            <HeadingText pl={'xl'} subtitle={subtitle} title={title} variant={'section'} />
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
