import { Children } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { AsWrapper } from '../as';
import { WithDefaultValues, WithOnSubmit } from '../withs';

export function Form({ children, className, defaultValues, onSubmit }: FormProps) {
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

export interface FormProps extends AsWrapper, WithDefaultValues, WithOnSubmit {}

// noinspection JSUnusedGlobalSymbols
export default Form;
