import debug from 'debug';
import {
    fetch,
    sdk_config,
    request_listener,
    response_listener,
    fetch_with_request,
    base_input,
    request_authorization_provider,
    Request,
} from './types';
import OpenSearchResponseError from "./OpenSearchResponseError";

const debugOpenSearchSdk = debug('opensearch-sdk');
const debugOpenSearchSdkHttp = debug('opensearch-sdk:http');

export abstract class BaseSdk {
    private readonly endpoint: string;
    private readonly fetch: fetch;
    private readonly requestListeners: request_listener[];
    private readonly responseListeners: response_listener[];
    private authorizationProvider: undefined|request_authorization_provider;
    constructor({endpoint, fetch, authorizationProvider, requestListeners = [], responseListeners = []}: sdk_config) {
        this.endpoint = endpoint;
        this.requestListeners = [...requestListeners];
        this.responseListeners = [...responseListeners];
        this.fetch = fetch;
        authorizationProvider && this.setAuthorizationProvider(authorizationProvider);
        debugOpenSearchSdk('instantiate %j', this);
    }
    addRequestListener(listener: request_listener) {
        this.requestListeners.push(listener);
        return this;
    }
    addResponseListener(listener: response_listener) {
        this.responseListeners.push(listener);
        return this;
    }
    setAuthorizationProvider(provider: request_authorization_provider) {
        if (!!this.authorizationProvider) throw new Error(`Authorization provider already set`);
        this.authorizationProvider = provider;
        return this.addRequestListener(this.createRequestListenerFromAuthorizationProvider(provider))
    }
    protected createRequestListenerFromAuthorizationProvider(provider: request_authorization_provider) {
        return async (request: Request): Promise<void> => {
            const value: any = await provider(request);
            if (!value) return;
            const headers: {[key: string]: any} = {};
            if ('string' === typeof value) headers['Authorization'] = value;
            else (Object.assign as Function)(headers, value as any);
            Object.entries(headers).forEach(([k, v]) => request.headers.set(k, v));
        }
    }
    protected parseInput({urlParams = undefined, ...rest}: base_input = {}) {
        return {
            body: (rest && !!Object.keys(rest).length) ? (rest._rawBody || rest) : undefined,
            queryString: urlParams ? Object.entries(urlParams).reduce((acc, [k, v]) => `${acc || ''}${acc ? '&' : ''}${k}=${encodeURIComponent(String(v))}`, '') : undefined
        };
    }
    async request(path: string, method: string, input: any|undefined = {}, headers: any|undefined = {}) {
        const {body = undefined, queryString = undefined} = this.parseInput(input);
        return this.http(`/${path}${queryString ? '?' : ''}${queryString || ''}`, method, body, headers)
    }
    async requestIndex(name: string, path: string, method: string, input: any|undefined = {}, headers: any|undefined = {}) {
        return this.request(`${name}${path ? '/' : ''}${path || ''}`, method, input, headers);
    }
    async requestIndexDocument(index: string, id: string|undefined, path: string, method: string, input: any|undefined = {}, headers: any|undefined = {}) {
        return this.requestIndex(index, `${path}${id ? `/${id}` : ''}`, method, input, headers);
    }
    async booleanRequest(path: string, method: string, input: any|undefined = {}, headers: any|undefined = {}) {
        try {
            await this.request(path, method, input, headers);
            return true;
        } catch (e: any) {
            return false;
        }
    }
    async http(uri: string = '/', method: string = 'GET', body: any|undefined = undefined, headers: any|undefined = {}) {
        const url = `${this.endpoint}${uri}`;
        const initOptions = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                ...headers,
            },
            body: body ? (('string' === typeof body) ? body : JSON.stringify(body)) : undefined,
        };
        const request = new Request(url, initOptions);
        await this.requestListeners.reduce(async (acc, r) => {
            await acc;
            return r(request);
        }, Promise.resolve())
        debugOpenSearchSdkHttp('request %j', {url, initOptions});
        const response = await (this.fetch as fetch_with_request)(request);
        await this.responseListeners.reduce(async (acc, r) => {
            await acc;
            return r(response);
        }, Promise.resolve())
        debugOpenSearchSdkHttp('response %j', response);
        if (!response.ok) {
            throw new OpenSearchResponseError(response, request);
        }
        const r = await response.json();
        debugOpenSearchSdkHttp('result %j', r);
        return r;
    }
}

export default BaseSdk;
