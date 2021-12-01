import { useCallback } from 'react';
import EditUserForm, { EditUserFormProps } from '../../forms/crud/EditUserForm';
import FormActionProps from '../../forms/FormActionProps';
import Spinner from '../../../atoms/Spinner';
import useUpdateAction from '../../../hooks/useUpdateAction';
import { WithId, WithMutationName, WithQueryName, WithSpinnerComponent } from '../../../withs';

export function EditUserAction({
    component: Component = EditUserForm,
    id,
    mutationName = 'UPDATE_USER',
    onSuccess,
    prepare: rawPrepare,
    queryName = 'GET_USER',
    spinnerComponent,
    ...props
}: EditUserActionProps) {
    const prepare = useCallback(
        (data: any) =>
            rawPrepare
                ? rawPrepare(data)
                : ((data: any) => ({
                      id,
                      data: {
                          name: data.name,
                      },
                  }))(data),
        [rawPrepare, id],
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

export interface EditUserActionProps
    extends EditUserFormProps,
        FormActionProps,
        Required<WithId>,
        WithSpinnerComponent,
        WithQueryName,
        WithMutationName {}

// noinspection JSUnusedGlobalSymbols
export default EditUserAction;
