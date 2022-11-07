import {gh_options} from "./types";
import * as logger from './logger';
import * as provider from "./provider";

export function wrap(handler: Function, options: gh_options = {}): (...args: any[]) => Promise<any> {
    init(options);
    const hn = provider.wrap(handler, options?.config?.mode);
    return async function(...args2: any[]) {
        try {
            return await hn(...args2);
        } catch (e: any) {
            try {
                await provider.error(e, ...args2);
            } catch (e2: any) {
                if (options.silentError) {
                    await logger.error(
                        'Unable to process error via provider:',
                        JSON.stringify(e2, null, 4),
                        'original error was',
                        JSON.stringify(e, null, 4)
                    );
                }
            }
            if (!options.silentError) throw e;
        }
    }
}

export function init(options: gh_options) {
    try {
        logger.init(options);
    } catch (e: any) {
        throw new Error(`Unable to load gh logger '${options.logger || process.env.GH_LOGGER || 'console'}': ${e.message}`);
    }
    try {
        provider.init(options);
    } catch (e: any) {
        throw new Error(`Unable to load gh provider '${options.provider || process.env.GH_PROVIDER || 'console'}': ${e.message}`);
    }
}

export async function log(level: string, ...args: any[]) {
    return logger.log(level, ...args);
}

export async function error(...args: any[]) {
    return logger.error(...args);
}

export async function info(...args: any[]) {
    return logger.info(...args);
}

export async function warn(...args: any[]) {
    return logger.warn(...args);
}

export async function debug(...args: any[]) {
    return logger.debug(...args);
}

export async function captureError(e: Error) {
    return provider.captureError(e);
}

export async function captureMessage(message: string, options?: any) {
    return provider.captureMessage(message, options);
}

export async function captureMessages(messages: string[], options?: any) {
    return provider.captureMessages(messages, options);
}

export async function captureData(type: string, data?: any, options?: any) {
    return provider.captureData(type, data, options);
}

export async function captureBulkData(bulkData?: any, options?: any) {
    return provider.captureBulkData(bulkData, options);
}

export async function captureEvent(event: any, options?: any) {
    return provider.captureEvent(event, options);
}

export async function captureTag(tag: string, value?: any, options?: any) {
    return provider.captureTag(tag, value, options);
}

export async function captureTags(tags: any, options?: any) {
    return provider.captureTags(tags, options);
}

export async function captureUser(user: any, options?: any) {
    return provider.captureUser(user, options);
}

export default wrap;
