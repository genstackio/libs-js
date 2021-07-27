import EditCurrentUserForm, { EditCurrentUserFormProps } from '../../forms/crud/EditCurrentUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { useCallback } from 'react';

export function EditCurrentUserAction({ id, onSuccess, ...props }: EditCurrentUserActionProps) {
    const prepare = useCallback(
        (data: any) => ({
            id,
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
            },
        }),
        [id],
    );

    const { data, props: someProps } = useUpdateAction({
        id,
        getQueryName: 'GET_USER',
        updateQueryName: 'UPDATE_USER',
        onSuccess,
        prepare,
    });

    if (!data) {
        return <Spinner />;
    }

    return (
        <>
            <EditCurrentUserForm {...someProps} defaultValues={data.getUser} {...props} />
        </>
    );
}

export interface EditCurrentUserActionProps extends EditCurrentUserFormProps, FormActionProps {
    id: string;
}

export default EditCurrentUserAction;
