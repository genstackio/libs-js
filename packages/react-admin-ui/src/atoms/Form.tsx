import clsx from 'clsx';
import { Children } from 'react';
import { useForm } from 'react-hook-form';
import { WithChildren, WithClassName, WithDefaultValues, WithOnSubmit } from '../withs';

export function Form({ className, defaultValues, children, onSubmit }: FormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues });
    return (
        <form onSubmit={handleSubmit(onSubmit as any)} className={clsx('w-full', className)}>
            {Children.map(children, (child, i) => {
                return (child as any)?.props?.field
                    ? React.createElement((child as any)?.type, {
                          ...{
                              defaultValues,
                              errors,
                              ...(child as any)?.props,
                              register,
                              key: i,
                          },
                      })
                    : child;
            })}
        </form>
    );
}

export interface FormProps extends WithClassName, WithChildren, WithDefaultValues, WithOnSubmit {}
export default Form;
