import { fromByteArray } from 'base64-js';

export function base64encode(s: string) {
    return fromByteArray(new TextEncoder().encode(s));
}

export default base64encode;
