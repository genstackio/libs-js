import {ComponentType, useCallback} from 'react';
import EditOrganizationForm, { EditOrganizationFormProps } from '../../forms/crud/EditOrganizationForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';

export function EditOrganizationAction({ component: Component = EditOrganizationForm, spinnerComponent, getQueryName = 'GET_ORGANIZATION', updateQueryName = 'UPDATE_ORGANIZATION', id, onSuccess, prepare, ...props }: EditOrganizationActionProps) {
    prepare = useCallback(
        (data: any) => prepare ? prepare(data) : ((data: any) => ({
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
            <Component {...someProps} defaultValues={data.getOrganization} {...props} />
        </>
    );
}

export interface EditOrganizationActionProps extends EditOrganizationFormProps, FormActionProps {
    id: string;
    getQueryName?: string;
    updateQueryName?: string;
    spinnerComponent?: ComponentType<any>;
}

// noinspection JSUnusedGlobalSymbols
export default EditOrganizationAction;
