import { ComponentType, useCallback } from 'react';
import EditUserForm, { EditUserFormProps } from '../../forms/crud/EditUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';

export function EditUserAction({
    component: Component = EditUserForm,
    spinnerComponent,
    getQueryName = 'GET_USER',
    updateQueryName = 'UPDATE_USER',
    id,
    onSuccess,
    prepare,
    ...props
}: EditUserActionProps) {
    prepare = useCallback(
        (data: any) =>
            prepare
                ? prepare(data)
                : ((data: any) => ({
                      id,
                      data: {
                          name: data.name,
                      },
                  }))(data),
        [prepare, id],
    );

    const SpinnerComponent = spinnerComponent || Spinner;

    const { data, props: someProps } = useUpdateAction({
        id,
        getQueryName,
        updateQueryName,
        onSuccess,
        prepare,
    });

    if (!data) {
        return <SpinnerComponent />;
    }

    return (
        <>
            <Component {...someProps} defaultValues={data.getUser} {...props} />
        </>
    );
}

export interface EditUserActionProps extends EditUserFormProps, FormActionProps {
    id: string;
    getQueryName?: string;
    updateQueryName?: string;
    spinnerComponent?: ComponentType<any>;
}

// noinspection JSUnusedGlobalSymbols
export default EditUserAction;
