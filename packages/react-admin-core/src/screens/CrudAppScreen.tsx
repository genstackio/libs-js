import {ErrorBoundary} from "@genstackio/react-contexts/lib/ErrorBoundary";

function Component({e}: any) {
    return (
        <p>error: {e.message}</p>
    );
}

export function CrudAppScreen({children}: any) {
    return (
        <ErrorBoundary component={Component}>
            {children}
        </ErrorBoundary>
    );
}

// noinspection JSUnusedGlobalSymbols
export default CrudAppScreen