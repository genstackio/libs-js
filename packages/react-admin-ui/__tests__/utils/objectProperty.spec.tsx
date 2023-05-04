import objectProperty from '../../src/utils/objectProperty';

describe('objectProperty', () => {
    [
        [undefined, 'a', undefined],
        [{}, undefined, undefined],
        [{}, 'a', undefined],
        [{ a: 42 }, 'a', 42],
        [{ a: 42 }, 'b', undefined],
        [{ a: 43, b: 'Hello' }, 'b', 'Hello'],
        [{ a: 43, b: { c: { d: 'World', e: true } } }, 'b.c.d', 'World'],
        [{ a: 43, b: { c: { d: 'World', e: true } } }, 'b.c.e', true],
        [{ a: 43, b: { c: { d: 'World', e: true } } }, 'b.c.f', undefined],
    ].forEach(([o, key, expected]: any) =>
        it(`${JSON.stringify(o)} [${key}] => ${expected}`, () => {
            expect(objectProperty(o, key)).toEqual(expected);
        }),
    );
});
