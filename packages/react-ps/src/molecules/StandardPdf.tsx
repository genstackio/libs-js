import Pdf from './Pdf';

export function StandardPdf({ className, children, theme }: StandardPdfProps) {
    return (
        <Pdf className={className} theme={theme || 'gotombola'}>
            {children}
        </Pdf>
    );
}

export interface StandardPdfProps {
    children?: any;
    className?: string;
    theme?: string;
}

// noinspection JSUnusedGlobalSymbols
export default StandardPdf;
