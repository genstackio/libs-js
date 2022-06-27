import JsField, {JsFieldProps} from "./JsField";

export function MainJsField(props: MainJsFieldProps) {
    return <JsField kind={'mainJs'} {...props} />
}

export interface MainJsFieldProps extends JsFieldProps {
}

export default MainJsField;