import AlertPanel from '../AlertPanel';
import Text from '../../atoms/Text';
import Column from '../../atoms/Column';
import FormHeader from '../../atoms/FormHeader';
import FormFooter from '../../atoms/FormFooter';
import {
    WithColorOfBox,
    WithChildren,
    WithDynamicChildren,
    WithClassName,
    WithDefaultValues,
    WithOnSubmit,
    WithSubtitle,
    WithTitle,
    WithSubmitting,
    WithHeader,
    WithFooter,
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
        <Column className={className}>
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
export interface InternalBaseFormProps extends Omit<BaseFormProps, 'children'>, WithChildren {
    rhf: { handleSubmit: Function };
}

export interface BaseFormProps
    extends WithClassName,
        WithOnSubmit,
        WithDefaultValues,
        WithDynamicChildren,
        WithTitle,
        WithSubtitle,
        WithSubmitting,
        WithHeader,
        WithFooter,
        WithColorOfBox {
    errors?: any;
}

export default BaseForm;
