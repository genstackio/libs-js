import { Document } from '@react-pdf/renderer';
import { DemoPage } from './pages';

export function PdfDocument() {
    return (
        <Document>
            <DemoPage title={'Section #1'} />
            <DemoPage title={'Section #2'} />
        </Document>
    );
}

// noinspection JSUnusedGlobalSymbols
export default PdfDocument;
