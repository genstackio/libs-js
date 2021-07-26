import clsx from 'clsx';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import { rich_text } from '../types';
import { WithImage, WithTextColor } from '../withs';
// @todo: add theme

export function Paragraph({ title, text, btnLabel, imageLeft = false, image }: ParagraphProps) {
    return (
        <Row className={clsx('xs:flex-col', imageLeft && 'flex-row-reverse xs:flex-col-reverse')}>
            <div className={clsx('flex-1')}>
                {title && (
                    <>
                        <Text className={'mb-2'} variant={'title5'} text={title} color={'primary'} />
                        <div className={'th-title-underline'} />
                    </>
                )}
                <>
                    {text && <Text className={'leading-loose py-3'} variant={'body'} text={text} />}
                    <div className={'flex justify-center mt-3'}>
                        <Button variant={'filled'} color={'primary'}>
                            {btnLabel}
                        </Button>
                    </div>
                </>
            </div>
            {image && (
                <div className={'flex-1 mr-4'}>
                    <Image {...image} objectFit={'contain'} />
                </div>
            )}
        </Row>
    );
}

export interface ParagraphProps extends WithImage, WithTextColor {
    title?: string;
    text?: string;
    btnLabel?: rich_text;
    btnTarget?: string;
    imageLeft?: boolean;
}

// noinspection JSUnusedGlobalSymbols
export default Paragraph;
