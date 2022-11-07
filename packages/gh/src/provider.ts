import {gh_context_provider} from "./types";
import createNoneProvider from './providers/none';

let adapter: gh_context_provider = createNoneProvider();

export function init(options: any = {}) {
    adapter = require(`${__dirname}/providers/${options.provider || process.env.GH_PROVIDER || 'console'}`).default(options.config);
}

export function wrap(handler: Function, mode?: string) {
    return adapter.wrap(handler, mode);
}

export async function error(e: Error, ...args: any[]) {
    return adapter.error(e, ...args);
}

export async function captureError(e: Error, options?: any) {
    return adapter.captureError(e, options);
}

export async function captureMessage(message: string, options?: any) {
    return adapter.captureMessage(message, options);
}

export async function captureMessages(messages: string[], options?: any) {
    return adapter.captureMessages(messages, options);
}

export async function captureData(type: string, data?: any, options?: any) {
    return adapter.captureData(type, data, options);
}

export async function captureBulkData(bulkData?: any, options?: any) {
    return adapter.captureBulkData(bulkData, options);
}

export async function captureEvent(event: any, options?: any) {
    return adapter.captureEvent(event, options);
}

export async function captureTag(tag: string, value?: any, options?: any) {
    return adapter.captureTag(tag, value, options);
}

export async function captureTags(tags: any, options?: any) {
    return adapter.captureTags(tags, options);
}

export async function captureUser(user: any, options?: any) {
    return adapter.captureUser(user, options);
}

export default init;
