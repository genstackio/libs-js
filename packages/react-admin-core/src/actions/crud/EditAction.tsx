import { EditFormProps } from '../../forms/crud/EditForm';
import FormActionProps from '@genstackio/react-admin-ui/lib/molecules/forms/FormActionProps';
import Spinner from '@genstackio/react-admin-ui/lib/atoms/Spinner';
import useUpdateAction from '@genstackio/react-admin-ui/lib/hooks/useUpdateAction';
import { WithId, WithMutationName, WithQueryName, WithSpinnerComponent } from '@genstackio/react-admin-ui/lib/withs';
import {useEditActionPrepare} from "../../hooks/useEditActionPrepare";
import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";
import {useCallback} from "react";

export function EditAction({name, id, edit = {}, singular, onSuccess, prepare, spinnerComponent, ...props}: EditActionProps) {
    const {attributes = [], form = true, prepare: typePrepare = undefined} = edit;
    const Component = useComponent('form', form ? 'crud/edit' : `${name}/edit${name.slice(0, 1).toUpperCase()}${name.slice(1)}`);
    const mutationName = `UPDATE_${singular.toUpperCase()}`;
    const queryName = `GET_${singular.toUpperCase()}`;
    const dataKey = `get${singular.slice(0, 1).toUpperCase()}${singular.slice(1)}`;
    prepare = useEditActionPrepare(id, prepare, attributes);
    const SpinnerComponent = spinnerComponent || Spinner;
    const localPrepare = useCallback((data: any) => {
        data = typePrepare ? typePrepare(data) : data;
        return prepare ? prepare(data) : data;
    }, [prepare, typePrepare]);
    const { data, props: someProps } = useUpdateAction({
        id,
        queryName,
        mutationName,
        onSuccess,
        prepare: localPrepare,
    });

    return data ? <Component {...someProps} defaultValues={data[dataKey]} {...props} name={name} id={id} singular={singular} edit={edit} /> : <SpinnerComponent />;
}

export interface EditActionProps
    extends EditFormProps,
        FormActionProps,
        Required<WithId>,
        WithSpinnerComponent,
        WithQueryName,
        WithMutationName {
    name: string;
    edit?: {
        content?: any;
        form?: boolean;
        attributes?: string[];
        prepare?: Function;
    };
    singular: string;
}

// noinspection JSUnusedGlobalSymbols
export default EditAction;
