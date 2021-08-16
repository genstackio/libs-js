import { WithBox, WithButtons, WithHeadingText, WithImage } from '../withs';
import HeadingText from '../atoms/HeadingText';
import Buttons from '../atoms/Buttons';
import { useButtons } from '../hooks';
import { AsComponent } from '../as';
import Div from '../atoms/Div';
import Block from '../atoms/Block';
import Image from '../atoms/Image';
import clsx from 'clsx';

export function BrandPanel({ title, description, color, variant, className, image, ...props }: BrandPanelProps) {
    const [btnProps] = useButtons(props);
    return (
        <Div flex auto className={clsx('grid grid-cols-4 sm:grid-cols-1', className)}>
            <Div flex className={'z-50 col-span-1'}>
                <Div className={'w-full h-auto my-10 sm:mx-8 sm:my-0'}>
                    <Image {...image} corner={'rounded'} expand={true} />
                </Div>
            </Div>
            <Div className={'-ml-20 sm:ml-0 z-10 col-span-3'}>
                <Block
                    variant={variant}
                    color={color}
                    className={'h-full items-center justify-center px-10 pl-10 py-10 sm:px-0 sm:pl-0 sm:py-0 sm:-mt-10'}
                >
                    <Div flex center className={'flex-col'}>
                        <HeadingText title={title} description={description} className={'w-5/6'} center />
                        <Buttons {...btnProps} className={'mt-8 items-center justify-center'} />
                    </Div>
                </Block>
            </Div>
        </Div>
    );
}

export interface BrandPanelProps extends AsComponent, WithBox, WithHeadingText, WithButtons, WithImage {}

export default BrandPanel;
