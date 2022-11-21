import { ReactNode } from 'react';
import CenteredLayoutTemplate from './layouts/CenteredLayoutTemplate';
import { AsComponent } from '../as';
import { WithImage, WithLogo } from '../withs';

export function RegisterTemplate({ form, ...props }: RegisterTemplateProps) {
    return <CenteredLayoutTemplate {...props}>{form}</CenteredLayoutTemplate>;
}

export interface RegisterTemplateProps extends AsComponent, WithImage, WithLogo {
    form?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default RegisterTemplate;
