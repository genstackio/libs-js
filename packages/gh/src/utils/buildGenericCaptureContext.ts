// noinspection JSUnusedGlobalSymbols

import { gh_capture_context } from '../types';

export function buildGenericCaptureContext(captureContexts?: gh_capture_context[]) {
    const scope = {};
    (captureContexts || []).forEach((cc) => {
        populateGenericScopeFromCaptureContext(scope, cc);
    });
    return scope;
}
const populateGenericScopeFromCaptureContext = (scope: any, captureContext?: gh_capture_context) => {
    const cco = !captureContext ? {} : 'function' === typeof captureContext ? captureContext() : captureContext;
    Object.entries(cco).forEach(([k, v]) => {
        switch (k) {
            case 'error':
                scope['error'] = v;
                break;
            case 'message':
                scope['message'] = v;
                break;
            case 'messages':
                scope['messages'] = scope['messages'] || [];
                scope['messages'] = [...scope['messages'], ...v];
                break;
            case 'property':
                !scope['properties'] && (scope['properties'] = {});
                scope['properties'][v[0]] = v[1];
                break;
            case 'data':
                scope['data'] = scope['data'] || {};
                Object.assign(scope['data'], v);
                break;
            case 'tag':
                scope['tags'] = scope['tags'] || {};
                Object.assign(scope['tags'], { [v[0]]: v[1] });
                break;
            case 'tags':
                scope['tags'] = scope['tags'] || {};
                Object.assign(scope['tags'], v);
                break;
            case 'user':
                scope['user'] = v;
                break;
            default:
                /* ignore */ break;
        }
    });
    return scope;
};

export default buildGenericCaptureContext;
