import {gh_context_logger} from "./types";
import createNoneLogger from "./loggers/none";
import createConsoleLogger from "./loggers/console";

let adapter: gh_context_logger = createNoneLogger();

const loggers: {[key: string]: (config: any) => gh_context_logger} = {}

registerLogger('none', createNoneLogger);
registerLogger('console', createConsoleLogger);

export function registerLogger(name: string, logger: (config: any) => gh_context_logger) {
    loggers[name] = logger;
}

export function init(options: any = {}) {
    const name = options?.logger || process.env.GH_LOGGER || 'console';
    if (!loggers[name]) throw new Error(`Unknown GH logger '${name}'`);
    adapter = loggers[name](options);
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
