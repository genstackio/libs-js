import { Component } from 'react';
import DefaultFallbackComponent from './DefaultFallbackComponent';

export class ErrorBoundary extends Component<
    { fallbackComponent?: any; type?: string; subtype?: string },
    { error?: Error }
> {
    constructor(props) {
        super(props);
        this.state = { error: undefined };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
    }

    render() {
        if (this.state.error) {
            const Comp = this.props.fallbackComponent || DefaultFallbackComponent;

            return <Comp error={this.state.error} {...this.props} />;
        }

        return this.props.children;
    }
}

// noinspection JSUnusedGlobalSymbols
export default ErrorBoundary;
