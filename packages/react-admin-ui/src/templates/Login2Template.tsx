import {ReactNode} from "react";
import {image} from "../types";
import {Image} from "../atoms";
import {Container} from "../atoms";

export function Login2Template({image, logo, bgColor, form}: Login2TemplateProps) {
    return (
        <div className={'h-screen flex bg-opacity-70 md:relative md:items-center sm:relative sm:items-center'}>
            <Container bgImage={image} className={'w-7/12 p-3 bg-cover bg-center flex-3 md:opacity-60 md:absolute md:w-full md:h-full sm:opacity-60 sm:absolute sm:w-full sm:h-full'} />
            <Container bgColor={bgColor} className={'w-5/12 py-8 px-3 flex-2 flex-col justify-center items-center md:hidden sm:hidden'}>
                {logo && <Image {...logo} />}
                <div className={'mt-4 p-10 w-full max-w-md bg-white rounded-lg shadow-block'}>
                    {form || ''}
                </div>
            </Container>
            <div className={'z-50 hidden flex sm:block md:block mx-auto'}>
                {logo && <Image {...logo} />}
                <div className={'mt-4 p-10 xs:p-5 md:p-5 w-full bg-white rounded-lg shadow-block'}>
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