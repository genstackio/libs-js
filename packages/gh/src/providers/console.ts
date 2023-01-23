import { gh_context_provider, gh_capture_context } from '../types';
import buildGenericCaptureContext from '../utils/buildGenericCaptureContext';

// noinspection JSUnusedLocalSymbols
export default (config: any = {}): gh_context_provider => {
    const sharedCaptureContexts: gh_capture_context[] = [];
    return {
        wrap: (handler: Function, mode?: string) => handler,
        buildCaptureContext: (captureContext?: gh_capture_context) =>
            buildGenericCaptureContext([...sharedCaptureContexts, captureContext || {}]),
        addCaptureContext: (captureContext: gh_capture_context) => sharedCaptureContexts.push(captureContext),
        error: async (e: Error, ...args: any[]) => {
            console.error(JSON.stringify(e, null, 4));
        },
        captureError: async (e: Error, captureContext?: gh_capture_context, options?: any) => {
            console.error(JSON.stringify(e, null, 4), JSON.stringify(captureContext, null, 4));
        },
        captureMessage: async (message: string, captureContext?: gh_capture_context, options?: any) => {
            console.log('message', message, JSON.stringify(captureContext, null, 4));
        },
        captureMessages: async (messages: string[], captureContext?: gh_capture_context, options?: any) => {
            messages.forEach((message) => {
                console.log('message', message, JSON.stringify(captureContext, null, 4));
            });
        },
        captureProperty: async (type: string, data?: any, captureContext?: gh_capture_context, options?: any) => {
            console.log('data', type, JSON.stringify(data, null, 4), JSON.stringify(captureContext, null, 4));
        },
        captureData: async (bulkData?: any, captureContext?: gh_capture_context, options?: any) => {
            Object.entries(bulkData || {}).forEach(([type, data]) => {
                console.log('data', type, JSON.stringify(data, null, 4), JSON.stringify(captureContext, null, 4));
            });
        },
        captureEvent: async (event: any, captureContext?: gh_capture_context, options?: any) => {
            console.log('event', JSON.stringify(event, null, 4), JSON.stringify(captureContext, null, 4));
        },
        captureTag: async (tag: string, value?: any, captureContext?: gh_capture_context, options?: any) => {
            console.log('tag', tag, JSON.stringify(value, null, 4), JSON.stringify(captureContext, null, 4));
        },
        captureTags: async (tags: any, captureContext?: gh_capture_context, options?: any) => {
            Object.entries(tags || {}).forEach(([tag, value]) => {
                console.log('tag', tag, JSON.stringify(value, null, 4), JSON.stringify(captureContext, null, 4));
            });
        },
        captureUser: async (user: any, captureContext?: gh_capture_context, options?: any) => {
            console.log('user', JSON.stringify(user, null, 4), JSON.stringify(captureContext, null, 4));
        },
    };
};
