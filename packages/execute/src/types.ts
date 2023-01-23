export type action = (params: any, ctx: any) => Promise<any>;

export type config = {
    definition?: string | any;
    params?: string | any;
};

export type context = {
    actions: { [key: string]: action };
    [key: string]: any;
};

export type execution_definition_step = {
    id?: string;
    name?: string;
    type?: string;
    required?: boolean;
    params?: any;
};

export type execution_definition_task = {
    id?: string;
    name?: string;
    type?: string;
    required?: boolean;
    params?: any;
};

export type execution_definition = {
    steps?: (string | execution_definition_step)[];
    tasks?: (string | execution_definition_task)[];
};
export type execution_order_prepared = {
    id: string;
    name?: string;
    type: string;
    params: any;
    required: boolean;
};

export type execution = {
    config: { definition?: string | any; params?: string | any };
    definition: execution_definition;
    params: any;
    status: string;
    result: any;
    details: any;
    ctx: any;
    parallel: boolean;
    orders: execution_order[];
    successes?: [any, execution_order_prepared][];
    errors?: Error[];
};

export type execution_order = {
    id: string;
    type: string;
    name?: string;
    params: any;
    required: boolean;
};
