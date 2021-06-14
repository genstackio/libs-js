import getInitials from "../../src/utils/getInitials";

describe('getInitials', () => {
    [
        ['olivier', 'O'],
        ['Olivier', 'O'],
        ['Olivier hoareau', 'OH'],
        ['maurice olivari', 'MO'],
        ['Alphonso della Vega', 'ADV'],
        ['Alphonso  Della     vega', 'ADV'],
    ].forEach(
        ([name, expected]) => it(`${name} => ${expected}`, () => {
            expect(getInitials(name)).toEqual(expected);
        })
    );
});