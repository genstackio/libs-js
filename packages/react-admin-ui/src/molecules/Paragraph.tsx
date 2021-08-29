import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Div from '../atoms/Div';
import Cell from '../atoms/Cell';
import Text from '../atoms/Text';
import Buttons from '../atoms/Buttons';
import useButtons from '../hooks/useButtons';
import { AsBox } from '../as';
import { WithTitle, WithText, WithImage, WithButtons } from '../withs';

export function Paragraph({
    className,
    color = 'primary',
    image,
    imageLeft = false,
    text,
    title,
    ...props
}: ParagraphProps) {
    const [buttonProps] = useButtons(props);

    return (
        <Row reverse={imageLeft} className={className}>
            <Cell col>
                <Text color={color} mb={'sm'} text={title} variant={'title5'} />
                <div className={'th-title-underline'} />
                <Text py={'xmd'} text={text} variant={'body'} className={'leading-loose'} />
                <Div center flex mt={'xmd'}>
                    <Buttons {...buttonProps} />
                </Div>
            </Cell>
            {image && (
                <Cell mr={'md'}>
                    <Image {...image} />
                </Cell>
            )}
        </Row>
    );
}

export interface ParagraphProps extends AsBox, WithTitle, WithText, WithImage, WithButtons {
    imageLeft?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default Paragraph;
