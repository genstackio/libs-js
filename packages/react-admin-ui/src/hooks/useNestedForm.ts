import { useCallback, useMemo } from 'react';
import useForm from './useForm';

const formOptions = { nested: true };
export function useNestedForm({ value, onSubmit }: any, marshall?: Function, unmarshall?: Function) {
    const preparedValue = useMemo(() => (marshall ? marshall(value) : value), [value, marshall]);
    const preparedOnSubmit = useCallback(
        (data: any) => {
            onSubmit?.(unmarshall ? unmarshall(data) : data);
        },
        [onSubmit, unmarshall],
    );
    const formProps = useMemo(
        () => ({ defaultValues: preparedValue, onSubmit: preparedOnSubmit }),
        [preparedValue, preparedOnSubmit],
    );

    return useForm(formProps, undefined, formOptions);
}

// noinspection JSUnusedGlobalSymbols
export default useNestedForm;
