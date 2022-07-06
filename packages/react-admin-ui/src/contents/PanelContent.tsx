import Panel, {PanelProps} from "../atoms/Panel";

export function PanelContent(props: PanelContentProps) {
    return (
        <Panel {...props} />
    );
}

export interface PanelContentProps extends PanelProps {
}

export default PanelContent;
