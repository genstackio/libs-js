import {ReactNode} from "react";
import {image} from "../types";
import {Image} from "../atoms";
import {Container} from "../atoms";

export function LoginTemplate({image, logo, form}: LoginTemplateProps) {
    return (
        <Container bgImage={image} className={'bg-cover h-screen py-10 px-3 flex flex-col justify-center items-center'}>
            {logo && <Image {...logo} className={'mx-auto'} />}
            <div className={'mt-4 p-10 xs:p-5 w-full xs:w-min max-w-md bg-white rounded-lg shadow-block'}>
                {form || ''}
            </div>
        </Container>
    );
}

export interface LoginTemplateProps {
    image?: image,
    logo?: image,
    form?: ReactNode,
}

export default LoginTemplate