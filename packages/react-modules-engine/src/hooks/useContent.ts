import useContentComponent from './useContentComponent';

// noinspection JSUnusedLocalSymbols
export function useContent({ type }: { type?: string } = {}, props: any) {
    return useContentComponent(type || 'unknown');
}

// noinspection JSUnusedGlobalSymbols
export default useContent;
