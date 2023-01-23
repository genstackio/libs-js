import useComponent from '@genstackio/react-contexts/lib/hooks/useComponent';

export function EditScreen(props: EditScreenProps) {
    const { plural, singular, edit: { action = true, props: extraProps = {} } = {} } = props;
    const actionComp: any = useComponent('action', action ? 'crud/edit' : `${singular}/edit_${singular}`);
    const Component = useComponent('screen_template', 'edit');
    return <Component {...props} action={actionComp} pluralName={plural} {...extraProps} />;
}

export interface EditScreenProps {
    name: string;
    singular: string;
    plural: string;
    edit?: {
        action?: boolean;
        properties?: any;
        props?: any;
    };
}

export default EditScreen;
