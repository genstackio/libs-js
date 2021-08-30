import Div from '../atoms/Div';
import Row from '../atoms/Row';
import Block from '../atoms/Block';
import Image from '../atoms/Image';
import Column from '../atoms/Column';
import Buttons from '../atoms/Buttons';
import HeadingText from '../atoms/HeadingText';
import useButtons from '../hooks/useButtons';
import useHeadingText from '../hooks/useHeadingText';
import { AsComponent } from '../as';
import { WithBox, WithButtons, WithHeadingText, WithImage } from '../withs';

export function BrandPanel({ className, color, image, variant, ...props }: BrandPanelProps) {
    const [htProps, rest] = useHeadingText(props);
    const [btnProps] = useButtons(rest);

    return (
        <Row auto grid={4} className={className}>
            <Div flex span={1} className={'z-50'}>
                <Div full mx={'_xl'} my={'_sl'}>
                    <Image corner={'rounded'} expand {...image} />
                </Div>
            </Div>
            <Div span={3} className={'ml-0 sm:-ml-20 z-10'}>
                <Block
                    color={color}
                    variant={variant}
                    className={'h-full items-center justify-center p-2 -mt-10 sm:mt-0'}
                >
                    <Column center>
                        <HeadingText center {...htProps} className={'w-5/6'} />
                        <Buttons mt={'xl'} {...btnProps} className={'items-center justify-center'} />
                    </Column>
                </Block>
            </Div>
        </Row>
    );
}

export interface BrandPanelProps extends AsComponent, WithBox, WithHeadingText, WithButtons, WithImage {}

// noinspection JSUnusedGlobalSymbols
export default BrandPanel;
