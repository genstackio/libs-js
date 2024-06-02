import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '@genstackio/react-admin-ui/lib/atoms/Spinner';

export function SubNewScreen(props: SubNewScreenProps) {
    const { parentId } = useParams<{ parentId: string }>();
    const { parentSingular, singular } = props;
    useEffect(() => {
        window.location.href = `/${singular}/new?${parentSingular}=${parentId}`;
    }, []);
    return <Spinner />;
}

export interface SubNewScreenProps {
    name: string;
    singular: string;
    plural: string;
    parentName: string;
    parentSingular: string;
    parentPlural: string;
    new?: {
        action?: boolean;
        props?: any;
    };
}

// noinspection JSUnusedGlobalSymbols
export default SubNewScreen;
