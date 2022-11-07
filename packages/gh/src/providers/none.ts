import {gh_context_provider, gh_capture_context} from "../types";
import buildGenericCaptureContext from "../utils/buildGenericCaptureContext";

// noinspection JSUnusedLocalSymbols
export default (config: any = {}): gh_context_provider => {
    const sharedCaptureContexts: gh_capture_context[] = [];
    return ({
        wrap: (handler: Function, mode?: string) => handler,
        buildCaptureContext: (captureContext?: gh_capture_context) => buildGenericCaptureContext([...sharedCaptureContexts, captureContext || {}]),
        addCaptureContext: (captureContext: gh_capture_context) => sharedCaptureContexts.push(captureContext),
        error: async (e: Error, ...args: any[]) => {
        },
        captureError: async (e: Error, captureContext?: gh_capture_context, options?: any) => {
        },
        captureMessage: async (message: string, captureContext?: gh_capture_context, options?: any) => {
        },
        captureMessages: async (messages: string[], captureContext?: gh_capture_context, options?: any) => {
        },
        captureProperty: async (type: string, data?: any, captureContext?: gh_capture_context, options?: any) => {
        },
        captureData: async (bulkData?: any, captureContext?: gh_capture_context, options?: any) => {
        },
        captureEvent: async (event: any, captureContext?: gh_capture_context, options?: any) => {
        },
        captureTag: async (tag: string, value?: any, captureContext?: gh_capture_context, options?: any) => {
        },
        captureTags: async (tags: any, captureContext?: gh_capture_context, options?: any) => {
        },
        captureUser: async (user: any, captureContext?: gh_capture_context, options?: any) => {
        },
    });
}
