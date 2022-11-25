export interface Provider {
    findOne(key: string, options: any): Promise<any>;
}

export type item = {
    v: any;
    t: number;
};

export type cached = {
    [key: string]: item;
};

export type options = {
    ttl?: number;
};

export type providers = provider[];

export type provider = {
    name: string;
    priority: number;
    provider: Provider;
};
