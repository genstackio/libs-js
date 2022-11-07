import {gh_context_provider, gh_capture_context} from "../types";
import {Scope} from "@sentry/node";

export function createSentryProvider(S: any, config: any = {}, overrides?: any): gh_context_provider {
    S.init({
        dsn: config.dsn || process.env.SENTRY_DSN,
        tracesSampleRate: config.tracesSampleRate || process.env.SENTRY_TRACES_SAMPLE_RATE || 1.0,
        ...(config?.environment ? {environment: config.environment} : {}),
    });
    const sharedCaptureContexts: gh_capture_context[] = [];
    const buildCaptureContext = (captureContext?: gh_capture_context) => {
        const scope = new Scope();
        sharedCaptureContexts.forEach(scc => {
            populateScopeFromCaptureContext(scope, scc);
        });
        populateScopeFromCaptureContext(scope, captureContext);
        return scope;
    }
    const populateScopeFromCaptureContext = (scope: Scope, captureContext?: gh_capture_context) => {
        const cco = !captureContext ? {} : (('function' === typeof captureContext) ? captureContext() : captureContext);
        Object.entries(cco).forEach(([k, v]) => {
            switch (k) {
                case 'error': /* ignore */ break;
                case 'message': /* ignore */ break;
                case 'messages': /* ignore */ break;
                case 'property': scope.setExtra(v[0], v[1]); break;
                case 'data': scope.setExtras(v); break;
                case 'tag': scope.setTag(v[0], v[1]); break;
                case 'tags': scope.setTags(v); break;
                case 'user': scope.setUser(v); break;
                default: /* ignore */ break;
            }
        });
        return scope;
    }
    // noinspection JSUnusedLocalSymbols
    return {
        wrap: (handler: Function, mode?: string) => handler,
        buildCaptureContext,
        addCaptureContext: (captureContext: gh_capture_context) => sharedCaptureContexts.push(captureContext),
        error: async (e: Error, ...args: any[]) => {
            S.captureException(e);
        },
        captureError: async (e: Error, captureContext?: gh_capture_context, options?: any) => {
            S.captureException(e, buildCaptureContext(captureContext));
        },
        captureMessage: async (message: string, captureContext?: gh_capture_context, options?: any) => {
            S.captureMessage(message, buildCaptureContext(captureContext));
        },
        captureMessages: async (messages: string[], captureContext?: gh_capture_context, options?: any) => {
            const cc = buildCaptureContext(captureContext);
            messages.forEach(message => {
                S.captureMessage(message, cc);
            });
        },
        captureProperty: async (type: string, data?: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.setExtra(type, data);
            });
        },
        captureData: async (data?: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.setExtras(data);
            });
        },
        captureEvent: async (event: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.captureEvent(event);
            });
        },
        captureTag: async (tag: string, value?: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.setTag(tag, value);
            });
        },
        captureTags: async (tags: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.setTags(tags);
            });
        },
        captureUser: async (user: any, captureContext?: gh_capture_context, options?: any) => {
            S.withScope((scope) => {
                populateScopeFromCaptureContext(scope, captureContext)
                S.setUser(user);
            });
        },
        ...overrides,
    };
}

export default createSentryProvider;
