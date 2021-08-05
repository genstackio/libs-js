import Image from '../../atoms/Image';
import Container from '../../atoms/Container';
import { WithChildren, WithImage, WithLogo } from '../../withs';

export function CenteredLayoutTemplate({ image, logo, children }: CenteredLayoutTemplateProps) {
    return (
        <Container
            bgImage={image}
            className={
                'bg-cover h-screen py-10 px-3 xs:px-0 flex flex-col justify-center xs:justify-start items-center'
            }
        >
            {logo && <Image expand={false} {...logo} className={'mx-auto max-w-xs xs:max-w-xxs'} />}
            <div
                className={
                    'mt-4 p-10 xs:p-5 w-full max-w-md xs:max-w-full bg-clear rounded-lg xs:rounded-none shadow-block'
                }
            >
                {children || ''}
            </div>
        </Container>
    );
}

export interface CenteredLayoutTemplateProps extends WithImage, WithLogo, WithChildren {}

export default CenteredLayoutTemplate;
