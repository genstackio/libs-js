import mergeI18nResources from "../../src/utils/mergeI18nResources";

describe('mergeI18nResources', () => {
    [
        ['single empty',
            {}, {},
        ],
        ['single non empty',
            {'fr-FR': {translation: {a: 'b'}}},
            {'fr-FR': {translation: {a: 'b'}}},
        ],
        ['multiple empty',
            [{}, {}],
            {},
        ],
        ['multiple with only one non-empty',
            [{}, {'en-US': {translation: {z: 't'}}}, {}],
            {'en-US': {translation: {z: 't'}}},
        ],
        ['multiple with multiple non-empty',
            [{'de-DE': {translation: {u: 'v'}}}, {'en-US': {translation: {z: 't'}}}, {}],
            {'de-DE': {translation: {u: 'v'}}, 'en-US': {translation: {z: 't'}}},
        ],
        ['multiple with all non-empty',
            [{'de-DE': {translation: {u: 'v'}}}, {'en-US': {translation: {z: 't'}}}, {'fr-FR': {translation: {x: 'y'}}}],
            {'de-DE': {translation: {u: 'v'}}, 'en-US': {translation: {z: 't'}}, 'fr-FR': {translation: {x: 'y'}}},
        ],
        ['multiple with overrided keys',
            [{'fr-FR': {translation: {u: 'v', n: 'd'}}}, {'en-US': {translation: {z: 't'}}}, {'fr-FR': {translation: {u: 'a', k: 'p'}}}],
            {'fr-FR': {translation: {u: 'v', n: 'd', k: 'p'}}, 'en-US': {translation: {z: 't'}}},
        ],
    ]
        .forEach(
            ([name, resources, expected]) => it(name as any, () => {
                expect(mergeI18nResources(resources)).toEqual(expected);
            })
        )
    ;
});