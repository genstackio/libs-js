import {ReactNode} from "react";
import {image} from "../types";
import {Image} from "../atoms";
import {Container} from "../atoms";

export function Login2Template({image, logo, bgColor, form}: Login2TemplateProps) {
    return (
        <div className={'h-screen flex bg-opacity-70 sm:relative sm:items-center'}>
            <Container bgImage={image} className={'w-7/12 p-3 bg-cover sm:absolute sm:w-full sm:h-full sm:opacity-80'} />
            <Container bgColor={bgColor} className={'w-5/12 py-8 px-3 flex flex-col justify-center items-center sm:hidden'}>
                {logo && <Image {...logo} />}
                <div className={'mt-4 p-10 w-full max-w-md bg-white rounded-lg shadow-block'}>
                    {form || ''}
                </div>
            </Container>
            <div className={'z-50 hidden sm:block mx-auto'}>
                {logo && <Image {...logo} />}
                <div className={'mt-4 p-10 xs:p-5 w-full xs:w-min bg-white rounded-lg shadow-block'}>
                    {form || ''}
                </div>
            </div>
        </div>
    );
}

export interface Login2TemplateProps {
    image?: image,
    logo?: image,
    bgColor?: string,
    form?: ReactNode,
}

export default Login2Template