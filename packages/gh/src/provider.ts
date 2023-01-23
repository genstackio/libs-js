import { gh_context_provider, gh_capture_context } from './types';
import createNoneProvider from './providers/none';
import createConsoleProvider from './providers/console';

let adapter: gh_context_provider = createNoneProvider();

const providers: { [key: string]: (config: any) => gh_context_provider } = {};

registerProvider('none', createNoneProvider);
registerProvider('console', createConsoleProvider);

export function registerProvider(name: string, provider: (config: any) => gh_context_provider) {
    providers[name] = provider;
}

export function init(options: any = {}) {
    const name = options.provider || process.env.GH_PROVIDER || 'console';
    if (!providers[name]) throw new Error(`Unknown GH provider '${name}'`);
    adapter = providers[name](options);
}

export function wrap(handler: Function, mode?: string) {
    return adapter.wrap(handler, mode);
}

export async function error(e: Error, ...args: any[]) {
    return adapter.error(e, ...args);
}

export function addCaptureContext(captureContext: gh_capture_context) {
    return adapter.addCaptureContext(captureContext);
}

export async function captureError(e: Error, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureError(e, captureContext, options);
}

export async function captureMessage(message: string, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureMessage(message, captureContext, options);
}

export async function captureMessages(messages: string[], captureContext?: gh_capture_context, options?: any) {
    return adapter.captureMessages(messages, captureContext, options);
}

export async function captureProperty(type: string, data?: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureProperty(type, data, captureContext, options);
}

export async function captureData(bulkData?: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureData(bulkData, captureContext, options);
}

export async function captureEvent(event: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureEvent(event, captureContext, options);
}

export async function captureTag(tag: string, value?: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureTag(tag, value, captureContext, options);
}

export async function captureTags(tags: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureTags(tags, captureContext, options);
}

export async function captureUser(user: any, captureContext?: gh_capture_context, options?: any) {
    return adapter.captureUser(user, captureContext, options);
}

export default init;
