import { useCallback } from 'react';
import EditOrganizationForm, { EditOrganizationFormProps } from '../../forms/crud/EditOrganizationForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';

export function EditOrganizationAction({ id, onSuccess, ...props }: EditOrganizationActionProps) {
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
        getQueryName: 'GET_ORGANIZATION',
        updateQueryName: 'UPDATE_ORGANIZATION',
        onSuccess,
        prepare,
    });

    if (!data) {
        return <Spinner />;
    }

    return (
        <>
            <EditOrganizationForm {...someProps} defaultValues={data.getOrganization} {...props} />
        </>
    );
}

export interface EditOrganizationActionProps extends EditOrganizationFormProps, FormActionProps {
    id: string;
}

// noinspection JSUnusedGlobalSymbols
export default EditOrganizationAction;
