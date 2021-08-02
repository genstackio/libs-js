import {generate} from '../src';
import {readFileSync} from 'fs';

function getSvgFixture(name: string) {
    return readFileSync(`${__dirname}/../__fixtures__/${name}.svg`).toString();
}

describe('generate', () => {
    it('return an svg string if no data is specified', async () => {
        expect(await generate()).toEqual(getSvgFixture('no-data'));
    });

    it('return an svg string if data is specified', async () => {
        expect(await generate({data: 'https://mydomain.com/abc'})).toEqual(getSvgFixture('with-data'));
    });
});
