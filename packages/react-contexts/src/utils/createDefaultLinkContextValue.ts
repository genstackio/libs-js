import DefaultLinkComponent from "../DefaultLinkComponent";

export const createDefaultLinkContextValue = (defaultValue: any = undefined): any => defaultValue || DefaultLinkComponent;

export default createDefaultLinkContextValue