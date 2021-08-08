import { useCallback } from 'react';
import EditOrganizationForm, { EditOrganizationFormProps } from '../../forms/crud/EditOrganizationForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { WithId, WithMutationName, WithQueryName, WithSpinnerComponent } from '../../../withs';

export function EditOrganizationAction({
    component: Component = EditOrganizationForm,
    spinnerComponent,
    queryName = 'GET_ORGANIZATION',
    mutationName = 'UPDATE_ORGANIZATION',
    id,
    onSuccess,
    prepare,
    ...props
}: EditOrganizationActionProps) {
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
        queryName,
        mutationName,
        onSuccess,
        prepare,
    });

    return data ? <Component {...someProps} defaultValues={data.getOrganization} {...props} /> : <SpinnerComponent />;
}

export interface EditOrganizationActionProps
    extends EditOrganizationFormProps,
        FormActionProps,
        Required<WithId>,
        WithSpinnerComponent,
        WithQueryName,
        WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default EditOrganizationAction;
