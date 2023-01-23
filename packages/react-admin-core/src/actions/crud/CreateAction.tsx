import { CreateFormProps } from '../../forms/crud/CreateForm';
import useAction from '@genstackio/react-admin-ui/lib/hooks/useAction';
import FormActionProps from '@genstackio/react-admin-ui/lib/molecules/forms/FormActionProps';
import { WithMutationName } from '@genstackio/react-admin-ui/lib/withs';
import useCreateActionPrepare from '../../hooks/useCreateActionPrepare';
import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';
import { useCallback } from 'react';

export function CreateAction({ name, singular, new: newInfos = {}, onSuccess, prepare, ...props }: CreateActionProps) {
    const { attributes = [], form = true, prepare: typePrepare = undefined } = newInfos;
    const Component = useComponent(
        'form',
        form ? 'crud/create' : `${name}/create${name.slice(0, 1).toUpperCase()}${name.slice(1)}`,
    );
    const mutationName = `CREATE_${singular.toUpperCase()}`;
    prepare = useCreateActionPrepare(prepare, attributes);
    const localPrepare = useCallback(
        (data: any) => {
            data = typePrepare ? typePrepare(data) : data;
            return prepare ? prepare(data) : data;
        },
        [prepare, typePrepare],
    );
    return (
        <Component
            {...useAction(mutationName, { onSuccess, prepare: localPrepare })}
            {...props}
            name={name}
            new={newInfos}
            singular={singular}
        />
    );
}

export interface CreateActionProps extends CreateFormProps, FormActionProps, WithMutationName {
    name: string;
    singular: string;
    new?: {
        content?: any;
        form?: boolean;
        attributes?: string[];
        prepare?: Function;
    };
}

// noinspection JSUnusedGlobalSymbols
export default CreateAction;
