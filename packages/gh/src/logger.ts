import createNoneLogger from './loggers/none';
import {gh_context_logger} from "./types";

let adapter: gh_context_logger = createNoneLogger();

export function init(options: any = {}) {
    adapter = require(`${__dirname}/loggers/${options?.logger || process.env.GH_LOGGER || 'console'}`).default(options);
}

export async function log(level: string, ...args: any[]) {
    return adapter.log(level, ...args);
}

export async function error(...args: any[]) {
    return adapter.error(...args);
}

export async function info(...args: any[]) {
    return adapter.info(...args);
}

export async function warn(...args: any[]) {
    return adapter.warn(...args);
}

export async function debug(...args: any[]) {
    return adapter.debug(...args);
}


export default init;
