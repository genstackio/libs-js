import { images_context_value } from '../types';

// noinspection JSUnusedLocalSymbols
export const createDefaultImagesContextValue = (
    defaultValue: images_context_value | undefined = undefined,
): images_context_value => defaultValue || { get: (key: string) => undefined };

export default createDefaultImagesContextValue;
