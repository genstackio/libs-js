import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { WithTitle, WithText, WithImage, WithButtons } from '../withs';
import { AsBox } from '../as';
import useButtons from '../hooks/useButtons';
import { Buttons } from '../atoms';
// @todo: add theme

export function Paragraph({
    className,
    title,
    text,
    color = 'primary',
    imageLeft = false,
    image,
    ...props
}: ParagraphProps) {
    const [buttonProps] = useButtons(props);
    return (
        <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse', className)}>
            <div className={clsx('flex-1')}>
                <Text className={'mb-2'} variant={'title5'} text={title} color={color} />
                <div className={'th-title-underline'} />
                <Text className={'leading-loose py-3'} variant={'body'} text={text} />
                <div className={'flex justify-center mt-3'}>
                    <Buttons {...buttonProps} />
                </div>
            </div>
            {image && (
                <div className={'flex-1 mr-4'}>
                    <Image {...image} />
                </div>
            )}
        </Row>
    );
}

export interface ParagraphProps extends AsBox, WithTitle, WithText, WithImage, WithButtons {
    imageLeft?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default Paragraph;
