import clsx from 'clsx';
import Image from '../atoms/Image';
import Row from '../atoms/Row';
import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import Block from '../atoms/Block';
import { AsBox } from '../as';
import { WithPush } from '../withs';
import pushImagePositionClass from '../mappings/push-image-positions';
import useBlock from '../hooks/useBlock';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';

export function Push({ imagePosition = 'left', image, ...props }: PushProps) {
    const [bProps, rest3] = useBlock(props, { color: 'primary' });
    const [htProps, rest2] = useHeadingText(rest3);
    const [buttonsProps] = useButtons(rest2);
    return (
        <Block {...bProps}>
            <Row className={clsx('xs:flex-col', pushImagePositionClass(imagePosition), 'xs:flex-col-reverse')}>
                <div className={'flex-1 sm:flex-auto sm:p-5'}>
                    <HeadingText {...htProps} titleClassName={'mb-2'} descriptionClassName={'leading-loose py-3'} />
                    <Buttons className={clsx(imagePosition === 'bottom' && 'mb-2')} {...buttonsProps} />
                </div>
                {!!image && (
                    <div className={'flex-1 flex-1 mr-4'}>
                        <Image {...image} objectFit={'contain'} />
                    </div>
                )}
            </Row>
        </Block>
    );
}

export interface PushProps extends AsBox, WithPush {}

// noinspection JSUnusedGlobalSymbols
export default Push;
