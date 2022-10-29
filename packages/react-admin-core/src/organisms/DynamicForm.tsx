import {dynamic_form} from "@genstackio/react-contexts/lib/types";
import {useMemo} from "react";
import {DynamicFormContextProvider} from "@genstackio/react-contexts/lib/contexts/DynamicFormContext";
import EditForm from "../forms/crud/EditForm";

export function DynamicForm({definition = {}, view = 'form', onSubmit}: DynamicFormProps) {
    const value = useMemo(() => ({
        definition,
    }), [definition]);

    const edit = useMemo(() => (value.definition || {})[view] || {}, [view, value]);

    return (
        <DynamicFormContextProvider value={value}>
            <EditForm name={`form_${view}`} edit={edit} onSubmit={onSubmit} />
        </DynamicFormContextProvider>
    );
}

export interface DynamicFormProps {
    id: string;
    definition?: dynamic_form;
    view?: string;
    onSubmit?: Function;
}

// noinspection JSUnusedGlobalSymbols
export default DynamicForm;
