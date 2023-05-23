import getFirst from './getFirst';
import defaultDefKeysBuilder from './defaultDefKeysBuilder';

export function defSelector(modules: any, defaultModules: any, doc: any, defKeysBuilder?: (doc: any) => string[]) {
    return modules || getFirst(defaultModules, ...((defKeysBuilder || defaultDefKeysBuilder)(doc) || []));
}

export default defSelector;
