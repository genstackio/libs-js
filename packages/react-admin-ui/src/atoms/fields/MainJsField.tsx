import JsField, { JsFieldProps } from './JsField';

export function MainJsField(props: MainJsFieldProps) {
    return <JsField kind={'mainJs'} {...props} />;
}

export type MainJsFieldProps = JsFieldProps;

export default MainJsField;
