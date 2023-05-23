import useTemplateContext from './useTemplateContext';

export function useTemplateComponent(type: string) {
    const templates = useTemplateContext();
    return templates[(type || '').replace(/\./g, '_')] || templates['unknown'];
}

export default useTemplateComponent;
