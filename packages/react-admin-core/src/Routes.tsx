import { ComponentType, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import DefaultLoadingScreen from './screens/DefaultLoadingScreen';

export function Routes({ children, loadingComponent }: RoutesProps) {
    const LoadingScreen = loadingComponent || DefaultLoadingScreen;
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Switch>{children}</Switch>
        </Suspense>
    );
}

export interface RoutesProps {
    children: any;
    loadingComponent?: ComponentType;
}

export default Routes;
