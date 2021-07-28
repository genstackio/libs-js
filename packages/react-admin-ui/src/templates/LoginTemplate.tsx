import { ReactNode } from 'react';
import { WithImage, WithLogo } from '../withs';
import CenteredLayoutTemplate from './layouts/CenteredLayoutTemplate';

export function LoginTemplate({ form, ...props }: LoginTemplateProps) {
    return <CenteredLayoutTemplate {...props}>{form}</CenteredLayoutTemplate>;
}

export interface LoginTemplateProps extends WithImage, WithLogo {
    form?: ReactNode;
}

export default LoginTemplate;
