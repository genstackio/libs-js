import { convert, convertThemeFileNameToName } from '../src';
import fs from 'fs';

describe('convertThemeFileNameToName', () => {
    [
        ['a.js', 'a'],
        ['xyz-a.js', 'xyz-a'],
    ].forEach(([a, b]) =>
        it(`${a} => ${b}`, () => {
            expect(convertThemeFileNameToName(a)).toEqual(b);
        }),
    );
});

describe('convert', () => {
    [['example1']].forEach(([a]) =>
        it(`${a}`, async () => {
            /* eslint @typescript-eslint/no-var-requires: 0 */
            expect(await convert(require(`${__dirname}/../__fixtures__/convert/${a}.json`))).toEqual(
                fs.readFileSync(`${__dirname}/../__fixtures__/convert/${a}.css`, 'utf-8'),
            );
        }),
    );
});
