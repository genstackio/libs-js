import { useCallback } from 'react';
import EditUserForm, { EditUserFormProps } from '../../forms/crud/EditUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';

export function EditUserAction({ id, onSuccess, ...props }: EditUserActionProps) {
    const prepare = useCallback(
        (data: any) => ({
            id,
            data: {
                name: data.name,
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
            <EditUserForm {...someProps} defaultValues={data.getUser} {...props} />
        </>
    );
}

export interface EditUserActionProps extends EditUserFormProps, FormActionProps {
    id: string;
}

// noinspection JSUnusedGlobalSymbols
export default EditUserAction;
