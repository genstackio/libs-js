import {ReactNode} from "react";
import {image} from "../types";
import {Image} from "../atoms";
import {Container} from "../atoms";

export function LoginTemplate({image, logo, form}: LoginTemplateProps) {
    return (
        <Container bgImage={image} className={'bg-cover h-screen flex justify-center items-center py-10 px-3'}>
            <div className={'space-y-4'}>
                {logo && <Image url={logo.url} alt={logo.alt} className={'mx-auto'} />}
                <div className={'p-10 xs:p-5 bg-white max-w-xs'}>
                    {form}
                </div>
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