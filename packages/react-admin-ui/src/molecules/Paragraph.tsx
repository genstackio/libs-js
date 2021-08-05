import clsx from 'clsx';
import Button from '../atoms/Button';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Text from '../atoms/Text';
import { box_color } from '../types';
import { WithTitle, WithText, WithImage, WithTextColor, WithBox, WithButtonLabel, WithButtonTarget } from '../withs';
// @todo: add theme

export function Paragraph({
    title,
    text,
    btnLabel,
    btnTarget,
    color = 'primary',
    imageLeft = false,
    image,
}: ParagraphProps) {
    return (
        <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse')}>
            <div className={clsx('flex-1')}>
                <Text className={'mb-2'} variant={'title5'} text={title} color={color} />
                <div className={'th-title-underline'} />
                <>
                    <Text className={'leading-loose py-3'} variant={'body'} text={text} />
                    <div className={'flex justify-center mt-3'}>
                        <Button variant={'filled'} color={color} onClick={btnTarget}>
                            {btnLabel}
                        </Button>
                    </div>
                </>
            </div>
            {image && (
                <div className={'flex-1 mr-4'}>
                    <Image {...image} />
                </div>
            )}
        </Row>
    );
}

export interface ParagraphProps
    extends WithTitle,
        WithText,
        WithImage,
        WithTextColor,
        WithBox,
        WithButtonLabel,
        WithButtonTarget {
    imageLeft?: boolean;
    color?: box_color;
}

// noinspection JSUnusedGlobalSymbols
export default Paragraph;
