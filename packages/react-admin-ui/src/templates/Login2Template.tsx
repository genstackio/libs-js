import { ReactNode } from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import Image from '../atoms/Image';
import Container from '../atoms/Container';
import { AsComponent } from '../as';
import { WithImage, WithLogo } from '../withs';

export function Login2Template({ bgColor, className, form, image, logo }: Login2TemplateProps) {
    return (
        <Div center flex hscreen relative className={clsx('bg-opacity-70', className)}>
            <Container
                bgImage={image}
                className={'w-7/12 p-3 bg-cover bg-center flex-3 opacity-60 absolute w-full h-full'}
            />
            <Container
                bgColor={bgColor}
                className={'w-5/12 py-8 px-3 flex-2 flex-col justify-center items-center hidden md:block'}
            >
                <Image expand={false} {...logo} />
                <Div corner={'rounded-xsmall'} full mt={'md'} p={'sl'} className={'max-w-md bg-clear shadow-block'}>
                    {form}
                </Div>
            </Container>
            <Div flex mobile mx={'auto'} tablet className={'z-50'}>
                <Image expand={false} {...logo} />
                <Div corner={'rounded-xsmall'} full mt={'md'} p={'_sl'} className={'bg-clear shadow-block'}>
                    {form}
                </Div>
            </Div>
        </Div>
    );
}

export interface Login2TemplateProps extends AsComponent, WithImage, WithLogo {
    bgColor?: string;
    form?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default Login2Template;
