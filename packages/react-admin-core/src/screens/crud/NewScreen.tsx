import useComponent from "@genstackio/react-contexts/lib/hooks/useComponent";

export function NewScreen(props: NewScreenProps) {
    const {plural, singular, new: {action = true} = {}} = props;
    const actionComp = useComponent('action', action ? 'crud/create' : `${singular}/create_${singular}`);
    const Component = useComponent('screen_template', 'create');
    return <Component {...props} action={actionComp} pluralName={plural} />;
}

export interface NewScreenProps {
    name: string;
    singular: string;
    plural: string;
    new?: {
        action?: boolean;
    };
}

// noinspection JSUnusedGlobalSymbols
export default NewScreen
