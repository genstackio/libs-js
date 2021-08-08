import Image from '../atoms/Image';
import Clickable from '../atoms/Clickable';
import Text from '../atoms/Text';
import { WithColorOfBox, WithButtonTarget, WithImage, WithText, WithTitle } from '../withs';
import { AsComponent } from '../as';

export function ContentItemMosaic({ className, title, text, image, btnTarget }: ContentItemMosaicProps) {
    return (
        <Clickable className={className} onClick={btnTarget} inline>
            <div className={'flex flex-row items-center justify-between p-8 shadow-container rounded-lg h-full'}>
                <div className={'w-3/12'}>
                    <Image {...image} />
                </div>
                <div className={'w-8/12'}>
                    <Text variant={'title6'} text={title} />
                    <Text variant={'description'} text={text} />
                </div>
            </div>
        </Clickable>
    );
}

export interface ContentItemMosaicProps
    extends AsComponent,
        WithTitle,
        WithText,
        WithImage,
        WithColorOfBox,
        WithButtonTarget {}

// noinspection JSUnusedGlobalSymbols
export default ContentItemMosaic;
