import YAML from 'yaml';

export async function parse(raw: string | any, defaultValue?: any) {
    if (!raw) return defaultValue;
    if ('string' === typeof raw) {
        raw = raw.trim();
        if (!raw) return defaultValue;
        if ('{' === raw.slice(0, 2)) return parseJsonObject(raw, defaultValue);
        return parseYamlObject(raw, defaultValue);
    }
    if ('object' === typeof raw) return raw;
    return defaultValue;
}

async function parseJsonObject(raw: string, defaultValue?: any) {
    if (!raw) return defaultValue;
    try {
        let x = JSON.parse(raw) || defaultValue;
        if (!x || 'object' !== typeof x) x = defaultValue;
        return x;
    } catch (e: any) {
        throw new Error(`Unable to parse JSON [${raw}]: ${e.message}`);
    }
}

async function parseYamlObject(raw: string, defaultValue?: any) {
    if (!raw) return defaultValue;
    try {
        let x = YAML.parse(raw) || defaultValue;
        if (!x || 'object' !== typeof x) x = defaultValue;
        return x;
    } catch (e: any) {
        throw new Error(`Unable to parse YAML [${raw}]: ${e.message}`);
    }
}
