// noinspection JSUnusedLocalSymbols

import {gh_context_logger} from "../types";

async function log(level: string, ...args: any[]) {
}
async function error(...args: any[]) {
}
async function info(...args: any[]) {
}
async function warn(...args: any[]) {
}
async function debug(...args: any[]) {
}

function createLogger(): gh_context_logger {
    return {
        log, error, info, warn, debug,
    };
}

export default createLogger;
