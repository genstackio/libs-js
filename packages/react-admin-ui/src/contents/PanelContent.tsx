import Panel, { PanelProps } from '../atoms/Panel';

export function PanelContent(props: PanelContentProps) {
    return <Panel {...props} />;
}

export type PanelContentProps = PanelProps;

export default PanelContent;
