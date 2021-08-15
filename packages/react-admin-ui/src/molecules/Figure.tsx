import Tag from '../atoms/Tag';
import Pill from '../atoms/Pill';
import Text from '../atoms/Text';
import Div from '../atoms/Div';
import Row from '../atoms/Row';
import { pill, tag } from '../types';
import { AsComponent } from '../as';
import { WithTitle } from '../withs';

export function Figure({ className, pill, price, tag, title }: FigureProps) {
    return (
        <Row responsive={false} className={className}>
            <div>
                {title && (
                    <Div inline mr={'xl'} className={'text-2xl'}>
                        {title}
                    </Div>
                )}
                {tag && (
                    <Div inline>
                        <Tag color={tag.color} text={tag.text} />
                    </Div>
                )}
                <Text mt={'md'} text={`${price}`} className={'text-dark font-black text-4xl'} />
            </div>
            {pill && (
                <Div absolute className={'right-4'}>
                    <Pill color={pill.color} text={pill.text} />
                </Div>
            )}
        </Row>
    );
}

export interface FigureProps extends AsComponent, WithTitle {
    pill?: pill;
    price?: string;
    tag?: tag;
}

// noinspection JSUnusedGlobalSymbols
export default Figure;
