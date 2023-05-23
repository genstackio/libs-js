export type WithAny = Record<string, any>;

export interface WithOptions<T = Record<string, any>> {
    options?: T;
}
