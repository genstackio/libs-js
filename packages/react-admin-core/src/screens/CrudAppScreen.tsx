import { ErrorBoundary } from '@genstackio/react-contexts/lib/ErrorBoundary';

function Component({ error }: any) {
    return <p>error: {error?.message || '?'}</p>;
}

export function CrudAppScreen({ children }: any) {
    return <ErrorBoundary component={Component}>{children}</ErrorBoundary>;
}

// noinspection JSUnusedGlobalSymbols
export default CrudAppScreen;
