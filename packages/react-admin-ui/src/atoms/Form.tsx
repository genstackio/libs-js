import {Children} from 'react';
import {useForm} from "react-hook-form";

export function Form({defaultValues, children, onSubmit}) {
    const { register, handleSubmit, formState: {errors}} = useForm({defaultValues});
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {Children.map(children, (child, i) => {
                return child.props.field
                    ? React.createElement(child.type, {
                        ...{
                            defaultValues,
                            errors,
                            ...child.props,
                            register,
                            key: i,
                        }
                    })
                    : child;
            })}
        </form>
    );
}

export default Form