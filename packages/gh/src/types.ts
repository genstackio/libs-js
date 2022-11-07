export type gh_options = {
    silentError?: boolean;
    provider?: string;
    logger?: string;
    mode?: string;
    config?: any;
};

export type gh_context_logger = {
    info: (...args: any[]) => Promise<void>;
    error: (...args: any[]) => Promise<void>;
    debug: (...args: any[]) => Promise<void>;
    warn: (...args: any[]) => Promise<void>;
    log: (level: string, ...args: any[]) => Promise<void>;
}
export type gh_context_provider = {
    wrap: (handler: Function, mode?: string) => Function;
    buildCaptureContext: (captureContext: gh_capture_context) => any;
    addCaptureContext: (captureContext: gh_capture_context) => void;
    error: (e: Error, ...args: any[]) => Promise<void>;
    captureError: (e: Error, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureTag: (tag: string, value: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureTags: (tags: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureMessage: (message: string, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureMessages: (messages: string[], captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureUser: (user: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureProperty: (type: string, value: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureData: (data: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
    captureEvent: (event: any, captureContext?: gh_capture_context, options?: any) => Promise<void>;
}

export type gh_capture_context = gh_capture_context_object | gh_capture_context_fn;
export type gh_capture_context_fn = () => gh_capture_context_object;
export type gh_capture_context_object = {
    tag?: [string, any];
    tags?: {[key: string]: any};
    user?: any;
    event?: any;
    message?: string;
    messages?: string[];
    error?: Error;
    property?: [string, any];
    data?: any;
}
