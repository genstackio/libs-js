import { TranslatorService } from '../src';
import MirrorPlugin from '../src/MirrorPlugin';

describe('translateData', () => {
    [
        [
            'mirror',
            [['mirror', new MirrorPlugin()]],
            {
                content: {
                    keys: ['Bonjour', 'Au revoir'],
                },
                bla: true,
            },
            'fr_FR',
            'fr_FR',
            {
                content: {
                    keys: ['Bonjour', 'Au revoir'],
                },
                bla: true,
            },
        ],
    ].forEach(([name, plugins, data, sourceLocale, targetLocale, expected]: any) =>
        it(name, async () => {
            const t = new TranslatorService();
            plugins.forEach(([name, p]) => t.registerPlugin(name, p));
            await expect(t.translateData(data, sourceLocale, targetLocale)).resolves.toEqual(expected);
        }),
    );
});
describe('translateI18n', () => {
    [
        [
            'mirror',
            [['mirror', new MirrorPlugin()]],
            {
                section1: {
                    key1: 'Bonjour',
                    key2: 'Au revoir',
                },
                bla: true,
            },
            {
                section1: {
                    key1: 'Bonjour',
                    key3: 'Bye bye',
                },
                bla: true,
            },
            'fr_FR',
            'fr_FR',
            {
                section1: {
                    key1: 'Bonjour',
                    key2: 'Au revoir',
                    key3: 'Bye bye',
                },
                bla: true,
            },
            {},
        ],
        [
            'mirror',
            [['mirror', new MirrorPlugin()]],
            {
                section1: {
                    key1: 'Bonjour',
                    key2: 'Au revoir',
                },
                bla: true,
            },
            {
                section1: {
                    key1: 'Bonjour',
                    key3: 'Bye bye',
                },
                bla: true,
            },
            'fr_FR',
            'fr_FR',
            {
                section1: {
                    key1: 'Bonjour',
                    key3: 'Bye bye',
                },
                bla: true,
            },
            {clean: true},
        ],
    ].forEach(([name, plugins, data, refData, sourceLocale, targetLocale, expected, config]: any) =>
        it(name, async () => {
            const t = new TranslatorService();
            plugins.forEach(([name, p]) => t.registerPlugin(name, p));
            await expect(t.translateI18n(data, refData, sourceLocale, targetLocale, config)).resolves.toEqual(expected);
        }),
    );
});
