export type class_name = string;
export type text = string;
export type url = string;
export type target = string;
export type id = string;
export type code = string;
export type currency = string;

export type error = {
    code: code;
    title?: text;
    description?: text;
    icon?: string;
};

export type flag = boolean;

export type image = {
    url: url;
    alt?: text;
};

export type ticket_price_amount_item = {
    id: id;
    popular?: flag;
    label?: text;
    price: number;
    currency?: currency;
};
export type prize = { id: id; rank: string; name: text; quantity: number };

export type http_state = { called: flag; loading: flag; data: any | undefined; error: any | undefined };

export type http_call = (q?: { variables?: Record<string, any> }) => Promise<any>;

export type document_head_options = {
    prepend?: string;
    append?: string;
    scripts?: any[];
    styles?: any[];
};

export type document_body_options = {
    prepend?: string;
    append?: string;
    scripts?: any[];
    styles?: any[];
};

export type tracker = {
    app: string;
    event: string;
    params?: any;
};

export type page<T = any> = {
    count?: number;
    cursor?: string;
    items?: T[];
};
