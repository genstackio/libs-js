import epsagon from 'epsagon';
import { gh_context_provider, gh_capture_context } from '@genstackio/gh/lib/types';
import buildGenericCaptureContext from '@genstackio/gh/lib/utils/buildGenericCaptureContext';

export default (config: any = {}): gh_context_provider => {
    let messageId = 1;
    let eventId = 1;
    epsagon.init({
        token: config.token || process.env.EPSAGON_TOKEN,
        appName:
            config.appName || process.env.EPSAGON_APP_NAME || process.env.AWS_LAMBDA_FUNCTION_NAME || 'unnamed-lambda',
        metadataOnly: 'undefined' !== typeof config.metadataOnly ? config.metadataOnly : false,
    });
    const sharedCaptureContexts: gh_capture_context[] = [];
    // noinspection JSUnusedLocalSymbols
    return {
        wrap: (handler: Function, mode?: string) => {
            switch (mode) {
                case 'node':
                    return epsagon.nodeWrapper(handler);
                case 'gcloudfunc':
                    return epsagon.googleCloudFunctionWrapper(handler);
                default:
                case 'lambda':
                    return epsagon.lambdaWrapper(handler);
            }
        },
        buildCaptureContext: (captureContext?: gh_capture_context) =>
            buildGenericCaptureContext([...sharedCaptureContexts, captureContext || {}]),
        addCaptureContext: (captureContext: gh_capture_context) => sharedCaptureContexts.push(captureContext),
        error: async (e: Error, ...args: any[]) => {
            epsagon.setError(e);
        },
        captureError: async (e: Error, captureContext?: gh_capture_context, options?: any) => {
            epsagon.setError(e);
        },
        captureMessage: async (message: string, captureContext?: gh_capture_context, options?: any) => {
            epsagon.label(`message_${messageId++}`, message);
        },
        captureMessages: async (messages: string[], captureContext?: gh_capture_context, options?: any) => {
            messages.forEach((message) => {
                epsagon.label(`message_${messageId++}`, message);
            });
        },
        captureProperty: async (type: string, data?: any, captureContext?: gh_capture_context, options?: any) => {
            epsagon.label(type, ['number', 'string', 'boolean'].includes(typeof data) ? data : JSON.stringify(data));
        },
        captureData: async (bulkData?: any, captureContext?: gh_capture_context, options?: any) => {
            Object.entries(bulkData || {}).forEach(([type, data]: [string, any]) => {
                epsagon.label(
                    type,
                    ['number', 'string', 'boolean'].includes(typeof data) ? data : JSON.stringify(data),
                );
            });
        },
        captureEvent: async (event: any, captureContext?: gh_capture_context, options?: any) => {
            epsagon.label(
                `event_${eventId++}`,
                ['number', 'string', 'boolean', 'undefined'].includes(typeof event) ? event : JSON.stringify(event),
            );
        },
        captureTag: async (tag: string, value?: any, captureContext?: gh_capture_context, options?: any) => {
            epsagon.label(
                `tag_${tag}`,
                ['number', 'string', 'boolean', 'undefined'].includes(typeof value) ? value : JSON.stringify(value),
            );
        },
        captureTags: async (tags: any, captureContext?: gh_capture_context, options?: any) => {
            Object.entries(tags || {}).forEach(([tag, value]: [string, any]) => {
                epsagon.label(
                    `tag_${tag}`,
                    ['number', 'string', 'boolean', 'undefined'].includes(typeof value) ? value : JSON.stringify(value),
                );
            });
        },
        captureUser: async (user: any, captureContext?: gh_capture_context, options?: any) => {
            epsagon.label(
                'user',
                ['number', 'string', 'boolean', 'undefined'].includes(typeof user) ? user : JSON.stringify(user),
            );
        },
    };
};
