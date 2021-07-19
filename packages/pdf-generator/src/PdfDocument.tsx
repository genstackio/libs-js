import { Document } from '@react-pdf/renderer';
import * as pages from './pages';

export function PdfDocument({config = {}}: PdfDocumentProps) {
    const template = config['template'] || 'default';
    const componentName = `${template.slice(0, 1).toUpperCase()}${template.slice(1)}Page`;
    const Component = pages[componentName] || pages['DefaultPage'];
    return (
        <Document>
            <Component />
        </Document>
    );
}

export interface PdfDocumentProps {
    config?: any;
}

// noinspection JSUnusedGlobalSymbols
export default PdfDocument;
