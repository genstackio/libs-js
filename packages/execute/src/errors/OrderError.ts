import {execution_order, execution_order_prepared} from "../types";

export class OrderError extends Error {
    protected readonly error: Error;
    protected readonly order: execution_order;
    protected readonly preparedOrder: execution_order_prepared|undefined;

    public constructor(order: execution_order, preparedOrder: execution_order_prepared|undefined, e: Error) {
        super(`Order error: ${e.message}`);
        this.error = e;
        this.order = order;
        this.preparedOrder = preparedOrder;
    }
    public getError() {
        return this.error;
    }
    public getOrder() {
        return this.order;
    }
    public getPreparedOrder() {
        return this.preparedOrder;
    }
    public toJSON() {
        return {
            error: {name: this.error.name, message: this.error, stack: this.error.stack},
            order: this.order,
            preparedOrder: this.preparedOrder,
        };
    }
}

export default OrderError;