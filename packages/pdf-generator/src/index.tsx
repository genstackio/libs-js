import ReactPDF from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';

async function cli(configFile, targetFile) {
    await ReactPDF.render(<PdfDocument />, targetFile);
}

export * from './pages';
export default cli;
