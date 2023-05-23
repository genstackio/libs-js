export function Main({ children }: MainProps) {
    return <>{children || ''}</>;
}

export interface MainProps {
    className?: string;
    children?: any;
}

// noinspection JSUnusedGlobalSymbols
export default Main;
