import {ComponentType, useMemo} from "react";
import {DynamicFormContextProvider} from "@genstackio/react-contexts/lib/contexts/DynamicFormContext";
import useForm from "@genstackio/react-admin-ui/lib/hooks/useForm";
import applyContext from "../utils/applyContext";
import Contents from "@genstackio/react-admin-ui/lib/molecules/Contents";

const defaultContext: any = {};

export function useDynForm(definition: any, view: string, props: any, context: any = defaultContext) {
    const value = useMemo(
        () => ({
            definition,
        }),
        [definition],
    );

    const name = definition?.edit?.name || 'form';

    const { Form, SubmitButton, field, form } = useForm(props, `dyn_${name}_${view}`);

    const options = useMemo(() => ({ field, SubmitButton }), [field, SubmitButton]);

    const { content = [] } = useMemo(() => applyContext((value.definition || {})[view] || {}, context), [view, value, context]) || {};

    const DynForm = ({children}: any) => (
        <DynamicFormContextProvider value={value}>
            <Form customChildren={children} className={'w-full'}>
                <Contents content={content} options={options} />
            </Form>
        </DynamicFormContextProvider>
    );

    const state = useMemo(() => ({
    }), []);

    return useMemo(() => [form.rhf.handleSubmit, DynForm, state], [form.rhf.handleSubmit, DynForm, state]) as [Function, ComponentType, any];
}

export default useDynForm;
