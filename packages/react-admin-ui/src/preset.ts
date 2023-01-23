import standard from './presets/standard';
import { clsxm_params, preset } from './types';
import clsx from 'clsx';
import buildStyleKey from './utils/buildStyleKey';

const presetSingleton = createPreset();

function createEmptyPreset() {
    return {
        config: {},
        overrides: {},
    };
}

function createPreset(): preset {
    const p = createEmptyPreset();
    const fallbackPreset = standard;
    const x = {};
    function load(config: any) {
        (Object.assign as any)(p.config, config);
        return x;
    }
    function get(key: string, defaultValues: any = undefined) {
        return p.config[key] || defaultValues || fallbackPreset[key] || {};
    }
    function set(key: string, value: any) {
        p.config[key] = value;
        return x;
    }
    function override(key: string, value: any) {
        p.overrides[key] = value;
        return x;
    }
    function overrides(overrides: { [key: string]: any }) {
        Object.assign(p.overrides, overrides);
        return x;
    }
    function classes(key: string, v: any, e: any = undefined, d: string | undefined = undefined, raw = false) {
        const x = get(key);
        const defaultValue = d || p.overrides[`${key}.default`] || x.default;
        const vv = String(undefined === v ? defaultValue : v);
        let f = [`${key}.styles.${vv}`, `${key}.styles.${defaultValue}`].find((z) => p.overrides[z]);
        if (!f) f = x.styles[vv] || x.styles[defaultValue];
        if (raw) return f || (e && (e[vv] || e[defaultValue]));
        return clsx(f, e && (e[vv] || e[defaultValue]));
    }
    function pclasses(key: string, keys: string[] | undefined = undefined) {
        return function (params: clsxm_params) {
            const { disablable = false, hoverable = false, disabled = false, ...attributes } = params;
            const { common = {}, nonDisabled = {}, hoverable: hoverableStyles = {} } = ({} = get(key).styles);
            const k = buildStyleKey(attributes, keys || ['variant', 'color']);
            return clsx(
                p.overrides[`${key}.styles.common.${k}`] || common[k],
                disablable && !disabled && (p.overrides[`${key}.styles.nonDisabled.${k}`] || nonDisabled[k]),
                hoverable && !disabled && (p.overrides[`${key}.styles.hoverable.${k}`] || hoverableStyles[k]),
            );
        };
    }
    function xclasses<T>(key: string) {
        return function (v: T | undefined, e: any = {}) {
            return classes(key, v, e);
        };
    }
    function xvalues<T>(key: string) {
        return function (v: T | undefined, e: any = {}) {
            return classes(key, v, e, undefined, true);
        };
    }
    function values(key: string) {
        return Object.keys(get(key)?.styles || {});
    }
    function combine(...args: ((clsxm_params) => string | undefined)[]) {
        return function (params: clsxm_params) {
            return clsx(...args.map((f) => f(params)));
        };
    }
    function customCombine(
        parametrize: (clsxm_params) => clsxm_params,
        ...args: ((clsxm_params) => string | undefined)[]
    ) {
        return function (params: clsxm_params) {
            params = parametrize(params);
            return clsx(...args.map((f) => f(params)));
        };
    }
    ((Object as any).assign as any)(x, {
        get,
        set,
        classes,
        pclasses,
        xclasses,
        values,
        combine,
        customCombine,
        override,
        overrides,
        xvalues,
        load,
    });
    return x as preset;
}

export default presetSingleton;
