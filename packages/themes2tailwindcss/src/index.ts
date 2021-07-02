import fs from 'fs';
import ejs from 'ejs';
import { colord } from 'colord';
import path from 'path';

export type config = {
    variables?: {
        [key: string]: { value: string | number | undefined; comment?: string };
    };
};

export async function themes2tailwindcss(sourceDir: string, targetDir: string, options: any = {}): Promise<string[]> {
    return Promise.all(
        (await listThemeFiles(sourceDir, options)).map(
            async (filePath: string): Promise<string> => convertThemeFileToTailwindcss(filePath, targetDir, options),
        ),
    );
}

// noinspection JSUnusedLocalSymbols
export async function listThemeFiles(sourceDir: string, options: any = {}): Promise<string[]> {
    return fs
        .readdirSync(sourceDir)
        .map((f) => (f.toString ? f.toString() : f))
        .filter((f) => /\.js$/.test(f))
        .map((f) => `${sourceDir}/${f}`);
}

// noinspection JSUnusedLocalSymbols
export async function saveCssFileContent(filePath: string, content: string, options: any = {}): Promise<void> {
    fs.writeFileSync(filePath, content);
}

// noinspection JSUnusedLocalSymbols
export function convertThemeFileNameToName(filePath: string, options: any = {}): string {
    return (filePath.match(/([^/]+)\.js$/) || [])[1]
        .split(/[-_]+/)
        .map((x) => x.toLowerCase())
        .join('-');
}

export function buildVariableName(k: string) {
    return k.split(/_/g).join('-');
}

export function buildCssSelectors(config: any) {
    const main = config.name === 'default' ? ':root' : `.theme-${config.name}`;
    return {
        cssSelector: main,
        cssDarkSelector:
            config.name === 'default' ? `:root.dark , :root .dark` : `.dark${main}, .dark ${main}, ${main} .dark`,
    };
}

export function convertVariable(k, v, acc) {
    let kk = buildVariableName(k);
    if (!kk) return;
    const varType = 'dark_' === k.slice(0, 5) ? 'cssDarkVariables' : 'cssVariables';
    kk = 'dark_' === k.slice(0, 5) ? kk.slice(5) : kk;
    switch (typeof v) {
        case 'string':
            if (/^#[0-9a-f]{3,6}$/i.test(v)) {
                const { r, g, b } = colord(v).toRgb();
                const vh = colord(v).toHex();
                //const isText = 'color-text' === kk.slice(0, 10);
                //acc[varType][kk] = {value: `rgba(${r}, ${g}, ${b}, var(--tw-${isText ? 'text' : 'bg'}-opacity${undefined !== a ? `, ${a}` : ''}))`, comment: vh};
                acc[varType][kk] = { value: `${r}, ${g}, ${b}`, comment: vh };
                break;
            }
            acc[varType][kk] = { value: String(v) };
            break;
        default:
            acc[varType][kk] = { value: String(v) };
            break;
    }
}
export async function convert(config: config): Promise<string> {
    const vars: [string, { value: string | number | undefined; comment?: string }][] = Object.entries(
        config.variables || {},
    );
    const typedVars: {
        cssVariables: { [key: string]: { value: string | number | undefined; comment?: string } };
        cssDarkVariables: { [key: string]: { value: string | number | undefined; comment?: string } };
    } = vars.reduce(
        (acc, [k, v]) => {
            convertVariable(k, v, acc);
            return acc;
        },
        { cssVariables: {}, cssDarkVariables: {} },
    );
    const cssVariables = Object.entries(typedVars.cssVariables)
        .sort(
            (
                a: [string, { value: string | number | undefined; comment?: string }],
                b: [string, { value: string | number | undefined; comment?: string }],
            ) => {
                return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
            },
        )
        .reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {});
    const cssDarkVariables = Object.entries(typedVars.cssDarkVariables)
        .sort(
            (
                a: [string, { value: string | number | undefined; comment?: string }],
                b: [string, { value: string | number | undefined; comment?: string }],
            ) => {
                return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
            },
        )
        .reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {});

    const params = {
        ...buildCssSelectors(config),
        cssVariables,
        cssDarkVariables,
        isDefault: config['name'] === 'default',
        config,
    };
    return ejs.render(fs.readFileSync(`${__dirname}/../templates/theme.css.ejs`, 'utf-8'), params);
}

export async function convertThemeFileToTailwindcss(
    filePath: string,
    targetDir: string,
    options: any = {},
): Promise<string> {
    const config: any = { variables: require(path.resolve(filePath)) || {}, options } || {};
    config.name = config.name || convertThemeFileNameToName(filePath, config);
    const targetFilePath = `${targetDir}/${config.name}.css`;
    await saveCssFileContent(targetFilePath, await convert(config));
    return targetFilePath;
}

export default themes2tailwindcss;
