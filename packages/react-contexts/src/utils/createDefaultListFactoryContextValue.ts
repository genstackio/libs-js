import { list_factory_context_value } from '../types';

export const createDefaultListFactoryContextValue = (
    defaultValue: list_factory_context_value | undefined = undefined,
) => defaultValue || ((() => undefined) as any);

export default createDefaultListFactoryContextValue;
