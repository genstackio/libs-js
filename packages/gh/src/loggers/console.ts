import { gh_context_logger } from '../types';

async function log(level: string, ...args: any[]) {
    console[level] && console[level](...args.map((a) => ('object' === typeof a ? JSON.stringify(a, null, 4) : a)));
}
async function error(...args: any[]) {
    return log('error', ...args);
}
async function info(...args: any[]) {
    return log('info', ...args);
}
async function warn(...args: any[]) {
    return log('warn', ...args);
}
async function debug(...args: any[]) {
    return log('debug', ...args);
}

function createLogger(): gh_context_logger {
    return {
        log,
        error,
        info,
        warn,
        debug,
    };
}

export default createLogger;
