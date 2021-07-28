import EditCurrentUserForm, { EditCurrentUserFormProps } from '../../forms/crud/EditCurrentUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { ComponentType, useCallback } from 'react';

export function EditCurrentUserAction({
    component: Component = EditCurrentUserForm,
    spinnerComponent,
    getQueryName = 'GET_USER',
    updateQueryName = 'UPDATE_USER',
    id,
    onSuccess,
    prepare,
    ...props
}: EditCurrentUserActionProps) {
    prepare = useCallback(
        (data: any) =>
            prepare
                ? prepare(data)
                : ((data: any) => ({
                      id,
                      data: {
                          firstName: data.firstName,
                          lastName: data.lastName,
                          email: data.email,
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

export interface EditCurrentUserActionProps extends EditCurrentUserFormProps, FormActionProps {
    id: string;
    getQueryName?: string;
    updateQueryName?: string;
    spinnerComponent?: ComponentType<any>;
}

export default EditCurrentUserAction;
