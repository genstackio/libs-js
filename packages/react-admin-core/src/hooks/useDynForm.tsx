import {ComponentType, useMemo} from "react";
import {DynamicFormContextProvider} from "@genstackio/react-contexts/lib/contexts/DynamicFormContext";
import useForm from "@genstackio/react-admin-ui/lib/hooks/useForm";
import applyContext from "../utils/applyContext";
import Contents from "@genstackio/react-admin-ui/lib/molecules/Contents";

const defaultContext: any = {};
const defaultContent: any[] = [];

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

    const { content = defaultContent } = useMemo(() => applyContext((value.definition || {})[view] || {}, context), [view, value, context]) || {};

    const DynForm = useMemo(() => ({children}: any) => (
        <DynamicFormContextProvider value={value}>
            <Form customChildren={children} className={'w-full'}>
                <Contents content={content} options={options} />
            </Form>
        </DynamicFormContextProvider>
    ), [content, options]);

    const state = useMemo(() => ({
        isSubmitting: form.rhf.formState.isSubmitting,
        isSubmitted: form.rhf.formState.isSubmitted,
        isDirty: form.rhf.formState.isDirty,
        isValid: form.rhf.formState.isValid,
        isValidating: form.rhf.formState.isValidating,
    }), [
        form.rhf.formState.isSubmitting,
        form.rhf.formState.isSubmitted,
        form.rhf.formState.isDirty,
        form.rhf.formState.isValid,
        form.rhf.formState.isValidating,
    ]);

    return useMemo(() => [form.rhf.handleSubmit, DynForm, state, form.rhf], [form.rhf.handleSubmit, DynForm, state, form.rhf]) as [Function, ComponentType<any>, {
        isDirty: boolean;
        isSubmitted: boolean;
        isSubmitting: boolean;
        isValidating: boolean;
        isValid: boolean;
    }, any];
}

export default useDynForm;
