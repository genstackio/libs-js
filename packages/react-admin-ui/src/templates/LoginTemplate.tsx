import { ReactNode } from 'react';
import CenteredLayoutTemplate from './layouts/CenteredLayoutTemplate';
import { AsComponent } from '../as';
import { WithImage, WithLogo } from '../withs';

export function LoginTemplate({ form, ...props }: LoginTemplateProps) {
    return <CenteredLayoutTemplate {...props}>{form}</CenteredLayoutTemplate>;
}

export interface LoginTemplateProps extends AsComponent, WithImage, WithLogo {
    form?: ReactNode;
}

// noinspection JSUnusedGlobalSymbols
export default LoginTemplate;
