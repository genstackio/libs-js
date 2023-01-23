import CssField, { CssFieldProps } from './CssField';

export function MainCssField(props: MainCssFieldProps) {
    return <CssField kind={'mainCss'} {...props} />;
}

export type MainCssFieldProps = CssFieldProps;

export default MainCssField;
