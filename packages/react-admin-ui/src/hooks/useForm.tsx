import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { useForm as useRhfForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import BaseForm from '../molecules/forms/BaseForm';
import { box_color } from '../mappings/box-colors';
import { class_name } from '../types';

const defaultDefaultValues = {};
const defaultErrors = {};
const defaultOptions = {};

export function useForm(
    { defaultValues = defaultDefaultValues, submitting = false, errors = defaultErrors, color = 'primary', ...props },
    name: string | undefined = undefined,
    { nested = false }: { nested?: boolean } = defaultOptions,
) {
    const rhf = useRhfForm({ defaultValues });
    const { t } = useTranslation();
    const { register, control, formState } = rhf;

    const field = useMemo(
        () => ({ register, control, errors: { ...formState.errors, ...errors }, defaultValues, disabled: submitting }),
        [register, control, formState, errors, defaultValues, submitting],
    );

    const generalError = useMemo(() => errors && (errors[''] || errors['*'] || errors['_']), [errors]);

    const form = useMemo(
        () => ({ rhf, ...props, errors: generalError ? { _: generalError } : {}, color: color as box_color }),
        [rhf, props, color, generalError],
    );

    const tf = useCallback(
        (k: string | string[], ...args) => {
            const xx = Array.isArray(k) ? k : [k];
            return t([`form_${name}_${xx[0]}`, ...xx.slice(1)], ...args);
        },
        [t, name],
    );

    const SubmitButton = useCallback(
        ({ className = undefined, overridenClassName, ...props }: { className?: class_name; [key: string]: any }) => {
            return (
                <Div center flex mt={'lg'}>
                    <Button
                        loading={submitting}
                        variant={'contained'}
                        color={color as box_color}
                        {...(overridenClassName
                            ? { className: overridenClassName }
                            : { className: clsx('w-full items-center justify-center', className) })}
                        {...props}
                    >
                        {tf(['submit_label', 'form_generic_submit_label'])}
                    </Button>
                </Div>
            );
        },
        [color, tf, submitting],
    );

    const vars = useMemo(
        () => ({ form, field, t, tf, color: color as box_color, SubmitButton }),
        [form, field, t, tf, color, SubmitButton],
    );

    const { className, header, footer, title, subtitle, onSubmit } = props;
    const { handleSubmit } = rhf;

    const Form = useCallback(
        ({ customChildren = undefined, ...props }) => {
            const computedChildren = customChildren
                ? 'function' === typeof customChildren
                    ? customChildren(vars)
                    : customChildren
                : props.children;
            /* eslint react/no-children-prop: 0 */
            return (
                <BaseForm
                    color={color}
                    className={className}
                    header={header}
                    footer={footer}
                    submitting={submitting}
                    rhf={{ handleSubmit }}
                    onSubmit={onSubmit}
                    {...props}
                    children={computedChildren}
                    nested={nested}
                />
            );
        },
        [color, nested, className, header, footer, title, subtitle, handleSubmit, onSubmit, submitting],
    );

    if (name) {
        form['title'] = t([`form_${name}_title`, '']) || undefined;
        form['subtitle'] = t([`form_${name}_subtitle`, '']) || undefined;
    }

    return { ...vars, Form };
}

export default useForm;
