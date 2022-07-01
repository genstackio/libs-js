import { breadcrumbs_factory_context_value } from '../types';

export const createDefaultBreadcrumbsFactoryContextValue = (defaultValue: breadcrumbs_factory_context_value | undefined = undefined) =>
    defaultValue || (() => []) as any;

export default createDefaultBreadcrumbsFactoryContextValue;
