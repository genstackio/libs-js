import { data } from './types';
import path from 'path';
import qrcode from 'qrcode';

export async function generate(data: data = {}) {
    return qrcode.toString(data?.data || 'empty', {
        scale: 4,
        margin: 0,
        width: 1024,
        type: 'svg',
        errorCorrectionLevel: 'high',
    });
}

export async function cli(jsonFile: string) {
    /* eslint @typescript-eslint/no-var-requires: 0 */
    console.log(await generate(require(path.resolve(jsonFile))));
}

export default cli;
