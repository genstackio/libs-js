import { ReactNode } from 'react';
import clsx from 'clsx';
import { flag } from '../../types';
import AlertPanel from '../AlertPanel';
import Text from '../../atoms/Text';
import Column from '../../atoms/Column';
import FormHeader from '../../atoms/FormHeader';
import FormFooter from '../../atoms/FormFooter';
import {
    WithBoxColor,
    WithChildren,
    WithClassName,
    WithDefaultValues,
    WithOnSubmit,
    WithSubtitle,
    WithTitle,
} from '../../withs';

export function BaseForm({
    className,
    title,
    subtitle,
    color,
    header,
    footer,
    children,
    onSubmit,
    rhf,
    submitting,
    errors = {},
}: InternalBaseFormProps) {
    const { handleSubmit } = rhf;
    const error = errors && (errors[''] || errors['*'] || errors['_']);
    return (
        <Column className={clsx(className)}>
            <FormHeader>{header}</FormHeader>
            <Column center>
                <form onSubmit={handleSubmit(onSubmit as any)} className={'w-full'} aria-disabled={submitting}>
                    {title && <Text text={title} variant={'title6'} color={color} />}
                    {subtitle && <Text className={'mb-4'} text={subtitle} variant={'body'} color={color} />}
                    {error && (
                        <AlertPanel color={'danger'} className={'mb-4'}>
                            {error.message}
                        </AlertPanel>
                    )}
                    {children}
                </form>
            </Column>
            <FormFooter>{footer}</FormFooter>
        </Column>
    );
}
export interface InternalBaseFormProps extends BaseFormProps {
    rhf: { handleSubmit: Function };
}

export interface BaseFormProps
    extends WithClassName,
        WithOnSubmit,
        WithDefaultValues,
        WithChildren,
        WithTitle,
        WithSubtitle,
        WithBoxColor {
    submitting?: flag;
    header?: ReactNode;
    footer?: ReactNode;
    errors?: any;
}

export default BaseForm;
