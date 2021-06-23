import { box_color } from '../../mappings/box-colors';
import { flag, rich_text } from '../../types';
import { ReactNode } from 'react';
import AlertPanel from '../AlertPanel';
import { Text } from '../../atoms/Text';

export function BaseForm({
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
        <div className={'w-full flex flex-col'}>
            {header && (
                <div className={'w-full flex flex-col justify-center'}>
                    <div className={'mt-4 flex flex-inline items-center justify-center'}>{header}</div>
                </div>
            )}
            <div className={'w-full flex justify-center flex-col'}>
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
            </div>
            {footer && (
                <div className={'w-full flex flex-col justify-center'}>
                    <div className={'mt-4 flex flex-inline items-center justify-center'}>{footer}</div>
                </div>
            )}
        </div>
    );
}
export interface InternalBaseFormProps extends BaseFormProps {
    rhf: { handleSubmit: Function };
}

export interface BaseFormProps {
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
