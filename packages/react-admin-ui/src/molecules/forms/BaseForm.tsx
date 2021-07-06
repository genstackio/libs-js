import { ReactNode } from 'react';
import clsx from 'clsx';
import { box_color } from '../../mappings/box-colors';
import { class_name, flag, rich_text } from '../../types';
import AlertPanel from '../AlertPanel';
import Text from '../../atoms/Text';
import Column from '../../atoms/Column';
import FormHeader from '../../atoms/FormHeader';
import FormFooter from '../../atoms/FormFooter';

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
                    {subtitle && (
                        <Text className={'text-gray-500 mb-4'} text={subtitle} variant={'body'} color={color} />
                    )}
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

export interface BaseFormProps {
    className?: class_name;
    onSubmit?: Function;
    defaultValues?: any;
    color?: box_color;
    submitting?: flag;
    header?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    errors?: any;
    title?: rich_text;
    subtitle?: rich_text;
}

export default BaseForm;
