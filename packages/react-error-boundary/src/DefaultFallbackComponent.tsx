const styles: any = {
    color: 'red',
    fontWeight: 'bold',
};

export function DefaultFallbackComponent({ error }: DefaultFallbackComponentProps) {
    return <div style={styles}>{error?.message || 'error'}</div>;
}

export interface DefaultFallbackComponentProps {
    error: Error;
}

// noinspection JSUnusedGlobalSymbols
export default DefaultFallbackComponent;
