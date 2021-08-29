import Row from '../atoms/Row';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Clickable from '../atoms/Clickable';
import { AsComponent } from '../as';
import { WithColorOfBox, WithButtonTarget, WithImage, WithText, WithTitle } from '../withs';

export function ContentItemMosaic({ btnTarget, className, image, text, title }: ContentItemMosaicProps) {
    return (
        <Clickable inline onClick={btnTarget} className={className}>
            <Row center corner={'rounded-xsmall'} hfull p={'xl'} spaced className={'shadow-container'}>
                <div className={'w-3/12'}>
                    <Image {...image} />
                </div>
                <div className={'w-8/12'}>
                    <Text text={title} variant={'title6'} />
                    <Text text={text} variant={'description'} />
                </div>
            </Row>
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
