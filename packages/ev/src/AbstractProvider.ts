import {Provider} from "./types";

export abstract class AbstractProvider implements Provider {
    abstract findOne(key: string, options: any): Promise<any>;
}

export default AbstractProvider;
