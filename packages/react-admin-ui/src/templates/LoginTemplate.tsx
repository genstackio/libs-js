import { ReactNode } from 'react';
import Image from '../atoms/Image';
import Container from '../atoms/Container';
import { WithImage, WithLogo } from '../withs';

export function LoginTemplate({ image, logo, form }: LoginTemplateProps) {
    return (
        <Container
            bgImage={image}
            className={
                'bg-cover h-screen py-10 px-3 xs:px-0 flex flex-col justify-center xs:justify-start items-center'
            }
        >
            {logo && <Image expand={false} {...logo} className={'mx-auto max-w-xs xs:max-w-full xs:mx-4'} />}
            <div
                className={
                    'mt-4 p-10 xs:p-5 w-full max-w-md xs:max-w-full bg-clear rounded-lg xs:rounded-none shadow-block'
                }
            >
                {form || ''}
            </div>
        </Container>
    );
}

export interface LoginTemplateProps extends WithImage, WithLogo {
    form?: ReactNode;
}

export default LoginTemplate;
