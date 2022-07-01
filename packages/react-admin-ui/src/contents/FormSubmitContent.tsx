export function FormSubmitContent({options}: FormSubmitContentProps) {
    const Component = (options || {})['SubmitButton'];
    return Component ? <div className={'inline-block'}><Component /></div> : null;
}

export interface FormSubmitContentProps {
    options?: {[key: string]: any};
}

// noinspection JSUnusedGlobalSymbols
export default FormSubmitContent;
