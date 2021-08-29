import { useCallback } from 'react';
import EditCurrentUserForm, { EditCurrentUserFormProps } from '../../forms/crud/EditCurrentUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { WithId, WithMutationName, WithQueryName, WithSpinnerComponent } from '../../../withs';

export function EditCurrentUserAction({
    component: Component = EditCurrentUserForm,
    id,
    mutationName = 'UPDATE_USER',
    onSuccess,
    prepare,
    spinnerComponent,
    queryName = 'GET_USER',
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
        queryName,
        mutationName,
        onSuccess,
        prepare,
    });

    return data ? <Component {...someProps} defaultValues={data.getUser} {...props} /> : <SpinnerComponent />;
}

export interface EditCurrentUserActionProps
    extends EditCurrentUserFormProps,
        FormActionProps,
        Required<WithId>,
        WithSpinnerComponent,
        WithQueryName,
        WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default EditCurrentUserAction;
