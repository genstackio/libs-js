export const createDefaultStorageContextValue = (defaultValue: {setItem: Function, getItem: Function, hasItem: Function, removeItem: Function}|undefined = undefined) => defaultValue;

export default createDefaultStorageContextValue