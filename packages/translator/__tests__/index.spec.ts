import {translateData} from "../src";

describe('translateData', () => {
    [
        [
            'mirror',
            {
            "content": {
                "keys": [
                    "Bonjour",
                    "Au revoir"
                ]
            },
            "bla": true
        },
            'fr_FR',
            'fr_FR',
        {
            "content": {
                "keys": [
                    "Bonjour",
                    "Au revoir"
                ]
            },
            "bla": true
        },
        ]
    ].forEach(
        ([name, data, sourceLocale, targetLocale, expected]: any) => it(name, async () => {
            await expect(translateData(data, sourceLocale, targetLocale)).resolves.toEqual(expected);
        })
    )
});
