import { Component } from 'react';

function DefaultErrorBoundaryDisplay() {
    return <div>An error occured.</div>;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: undefined };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        // TODO: send data to remote monitoring service
    }
    formatErrorTitle() {
        const { error } = this.props as any;
        return `RENDER ERROR: ${error.message}`;
    }
    render() {
        const { hasError, error } = this.state as any;
        const { children, component: Component = DefaultErrorBoundaryDisplay, ...rest } = this.props;
        if (!hasError) return children;
        return <Component error={error} {...rest} />;
    }
}

export interface ErrorBoundaryProps {
    children?: any;
    component?: any;
}

export default ErrorBoundary;
