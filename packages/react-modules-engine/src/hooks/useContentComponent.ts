import useContentComponentsContext from './useContentComponentsContext';

export function useContentComponent(type: string) {
    const components = useContentComponentsContext();
    return components[(type || '').replace(/\./g, '_')] || components['unknown'];
}

export default useContentComponent;
