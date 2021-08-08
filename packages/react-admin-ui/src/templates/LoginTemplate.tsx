import { ReactNode } from 'react';
import { WithImage, WithLogo } from '../withs';
import CenteredLayoutTemplate from './layouts/CenteredLayoutTemplate';
import { AsComponent } from '../as';

export function LoginTemplate({ form, ...props }: LoginTemplateProps) {
    return <CenteredLayoutTemplate {...props}>{form}</CenteredLayoutTemplate>;
}

export interface LoginTemplateProps extends AsComponent, WithImage, WithLogo {
    form?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default LoginTemplate;
