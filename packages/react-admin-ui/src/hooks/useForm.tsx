import { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { useForm as useRhfForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { box_color } from '../mappings/box-colors';
import BaseForm from '../molecules/forms/BaseForm';
import Button from '../atoms/Button';
import { class_name } from '../types';

export function useForm(
    { defaultValues = {}, submitting = false, errors = {}, color = 'primary', ...props },
    name: string | undefined = undefined,
) {
    const rhf = useRhfForm({ defaultValues });
    const { t } = useTranslation();
    const {
        register,
        formState: { errors: rhfErrors },
    } = rhf;
    const field = useMemo(
        () => ({ register, errors: { ...rhfErrors, ...errors }, defaultValues, disabled: submitting }),
        [register, rhfErrors, errors, defaultValues, submitting],
    );

    const form = useMemo(
        () => ({ rhf, ...props, errors: field.errors, color: color as box_color }),
        [rhf, props, field, color],
    );

    const Form = useCallback(
        (props) => {
            return <BaseForm {...form} {...props} />;
        },
        [form],
    );

    const tf = useCallback(
        (k: string | string[], ...args) => {
            const xx = Array.isArray(k) ? k : [k];
            return t([`form_${name}_${xx[0]}`, ...xx.slice(1)], ...args);
        },
        [t, name],
    );

    const SubmitButton = useCallback(
        ({ className = undefined }: { className?: class_name }) => {
            return (
                <div className="flex justify-center mt-6">
                    <Button
                        loading={submitting}
                        className={clsx('w-full items-center justify-center', className)}
                        variant={'contained'}
                        color={color as box_color}
                    >
                        {tf(['submit_label', 'form_generic_submit_label'])}
                    </Button>
                </div>
            );
        },
        [color, tf],
    );

    if (name) {
        form['title'] = t([`form_${name}_title`, '']) || undefined;
        form['subtitle'] = t([`form_${name}_subtitle`, '']) || undefined;
    }

    return { form, field, t, tf, color: color as box_color, Form, SubmitButton };
}

export default useForm;
