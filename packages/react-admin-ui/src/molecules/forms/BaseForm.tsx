import Text from '../../atoms/Text';
import Column from '../../atoms/Column';
import FormHeader from '../../atoms/FormHeader';
import FormFooter from '../../atoms/FormFooter';
import Alert from '../../atoms/Alert';
import { AsComponent } from '../../as';
import {
    WithColorOfBox,
    WithChildren,
    WithDynamicChildren,
    WithDefaultValues,
    WithOnSubmit,
    WithSubtitle,
    WithTitle,
    WithSubmitting,
    WithHeader,
    WithFooter,
    WithErrors,
} from '../../withs';

const defaultErrors = {};

export function BaseForm({
    children,
    className,
    color,
    errors = defaultErrors,
    footer,
    header,
    onSubmit,
    rhf,
    submitting,
    subtitle,
    title,
}: InternalBaseFormProps) {
    const { handleSubmit } = rhf;
    const error = errors && (errors[''] || errors['*'] || errors['_']);

    return (
        <Column className={className}>
            <FormHeader>{header}</FormHeader>
            <Column center>
                <form aria-disabled={submitting} onSubmit={handleSubmit(onSubmit as any)} className={'w-full'}>
                    <Text color={color} text={title} variant={'title6'} />
                    <Text color={color} text={subtitle} variant={'body'} className={'mb-4'} />
                    <Alert color={'danger'} mb={'md'} message={error?.message} />
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
    extends AsComponent,
        WithOnSubmit,
        WithDefaultValues,
        WithDynamicChildren,
        WithTitle,
        WithSubtitle,
        WithSubmitting,
        WithHeader,
        WithFooter,
        WithErrors,
        WithColorOfBox {}

// noinspection JSUnusedGlobalSymbols
export default BaseForm;
