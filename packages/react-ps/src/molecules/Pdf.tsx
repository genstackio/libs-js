import { StyleConfigContextProvider } from '../contexts/StyleConfigContext';
import { CustomizationContextProvider } from '../contexts/CustomizationContext';
import themes from '../configs/themes';

export function Pdf({ children, tenant, theme }: PdfProps) {
    const customizationValue = {
        tenant: tenant || 'default',
        theme: theme || 'default',
    };

    return (
        <CustomizationContextProvider value={customizationValue}>
            <StyleConfigContextProvider value={themes[customizationValue.theme] || themes['default']}>
                {children}
            </StyleConfigContextProvider>
        </CustomizationContextProvider>
    );
}

export interface PdfProps {
    footer?: any;
    children?: any;
    className?: string;
    gFonts?: string[];
    theme?: string;
    tenant?: string;
}

// noinspection JSUnusedGlobalSymbols
export default Pdf;
