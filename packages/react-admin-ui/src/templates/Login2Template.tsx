import { ReactNode } from 'react';
import Image from '../atoms/Image';
import Container from '../atoms/Container';
import { WithImage, WithLogo } from '../withs';

export function Login2Template({ image, logo, bgColor, form }: Login2TemplateProps) {
    return (
        <div className={'h-screen flex bg-opacity-70 md:relative md:items-center sm:relative sm:items-center'}>
            <Container
                bgImage={image}
                className={
                    'w-7/12 p-3 bg-cover bg-center flex-3 md:opacity-60 md:absolute md:w-full md:h-full sm:opacity-60 sm:absolute sm:w-full sm:h-full'
                }
            />
            <Container
                bgColor={bgColor}
                className={'w-5/12 py-8 px-3 flex-2 flex-col justify-center items-center md:hidden sm:hidden'}
            >
                {logo && <Image expand={false} {...logo} />}
                <div className={'mt-4 p-10 w-full max-w-md bg-clear rounded-lg shadow-block'}>{form || ''}</div>
            </Container>
            <div className={'z-50 hidden flex sm:block md:block mx-auto'}>
                {logo && <Image expand={false} {...logo} />}
                <div className={'mt-4 p-10 xs:p-5 md:p-5 w-full bg-clear rounded-lg shadow-block'}>{form || ''}</div>
            </div>
        </div>
    );
}

export interface Login2TemplateProps extends WithImage, WithLogo {
    bgColor?: string;
    form?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default Login2Template;
