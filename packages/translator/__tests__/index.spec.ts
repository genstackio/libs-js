import { TranslatorService } from '../src';
import MirrorPlugin from '../src/plugins/MirrorPlugin';

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
