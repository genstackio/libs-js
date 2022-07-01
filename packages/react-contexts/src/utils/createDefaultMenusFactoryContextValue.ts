import { menus_factory_context_value } from '../types';

export const createDefaultMenusFactoryContextValue = (defaultValue: menus_factory_context_value | undefined = undefined) =>
    defaultValue || (() => undefined) as any;

export default createDefaultMenusFactoryContextValue;
