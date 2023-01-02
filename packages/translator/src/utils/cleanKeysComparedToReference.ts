import {deepClean} from "@genstackio/deep";

export async function cleanKeysComparedToReference(a, b) {
    return deepClean(a, b);
}

export default cleanKeysComparedToReference;
