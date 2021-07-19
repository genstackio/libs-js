import ReactPDF from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';
import path from 'path';

async function cli(configFile, targetFile) {
    await ReactPDF.render(<PdfDocument config={require(path.resolve(configFile))} />, targetFile);
}

export * from './pages';
export default cli;
