import CssField, {CssFieldProps} from "./CssField";

export function MainCssField(props: MainCssFieldProps) {
    return <CssField kind={'mainCss'} {...props} />
}

export interface MainCssFieldProps extends CssFieldProps {
}

export default MainCssField;