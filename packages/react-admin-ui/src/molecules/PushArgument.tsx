import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Cell from '../atoms/Cell';
import ArgumentBlock from './ArgumentBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { image } from '../types';
import { AsComponent } from '../as';
import { WithButtons, WithHeadingText, WithImage } from '../withs';

export function PushArgument({ image, image2, imagePosition = 'left', ...props }: PushArgumentProps) {
    const [htProps, rest] = useHeadingText(props);
    const [btProps] = useButtons(rest);

    return (
        <Row reverse={imagePosition === 'right'} className={'maw-w-5/6 sm:m-auto max-h inherit'}>
            <Cell className={'sm:items-center justify-end items-end sm:justify-center -mb-1'}>
                {image2 && <Image contained {...image2} />}
            </Cell>
            <Cell center>
                <ArgumentBlock {...htProps} {...btProps} image={image} noShadow />
            </Cell>
        </Row>
    );
}

export interface PushArgumentProps extends AsComponent, WithHeadingText, WithImage, WithButtons {
    image2?: image;
    imagePosition?: 'right' | 'left';
    mobileImagePosition?: 'right' | 'left';
}

// noinspection JSUnusedGlobalSymbols
export default PushArgument;
