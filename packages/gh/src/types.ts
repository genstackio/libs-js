export type gh_options = {
    silentError?: boolean;
    provider?: string;
    logger?: string;
    mode?: string;
    config?: any;
};

export type gh_context_handler = Function;
export type gh_context_logger = {
    info: (...args: any[]) => Promise<void>;
    error: (...args: any[]) => Promise<void>;
    debug: (...args: any[]) => Promise<void>;
    warn: (...args: any[]) => Promise<void>;
    log: (level: string, ...args: any[]) => Promise<void>;
}
export type gh_context_provider = {
    wrap: (handler: Function, mode?: string) => Function;
    error: (e: Error, ...args: any[]) => Promise<void>;
    captureError: (e: Error, options: any) => Promise<void>;
    captureTag: (tag: string, value: any, options: any) => Promise<void>;
    captureTags: (tags: any, options: any) => Promise<void>;
    captureMessage: (message: string, options: any) => Promise<void>;
    captureMessages: (messages: string[], options: any) => Promise<void>;
    captureUser: (user: any, options: any) => Promise<void>;
    captureData: (type: string, data: any, options: any) => Promise<void>;
    captureBulkData: (data: any, options: any) => Promise<void>;
    captureEvent: (event: any, options: any) => Promise<void>;
}

export type gh_request_context_handler = gh_context_handler;
export type gh_request_context_logger = gh_context_logger;
export type gh_request_context_provider = gh_context_provider;

export type gh_request_context = {
    event: any;
    context: any;
    handler: gh_request_context_handler;
    provider: gh_request_context_provider;
    logger: gh_request_context_logger;
    result?: any;
    error?: any
};
