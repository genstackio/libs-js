import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import Block from '../atoms/Block';
import Cell from '../atoms/Cell';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { AsBox } from '../as';
import { WithPush } from '../withs';

export function Push({ image, imagePosition = 'left', ...props }: PushProps) {
    const [bProps, rest3] = useBlock(props, { color: 'primary' });
    const [htProps, rest2] = useHeadingText(rest3);
    const [buttonsProps] = useButtons(rest2);

    return (
        <Block {...bProps}>
            <Row reverse={imagePosition === 'left' || imagePosition === 'top'}>
                <Cell col p={'xlg'}>
                    <HeadingText descriptionClassName={'leading-loose py-3'} titleClassName={'mb-2'} {...htProps} />
                    <Buttons {...buttonsProps} className={clsx(imagePosition === 'bottom' && 'mb-2')} />
                </Cell>
                {!!image && (
                    <Cell mr={'md'}>
                        <Image {...image} contained />
                    </Cell>
                )}
            </Row>
        </Block>
    );
}

export interface PushProps extends AsBox, WithPush {}

// noinspection JSUnusedGlobalSymbols
export default Push;
