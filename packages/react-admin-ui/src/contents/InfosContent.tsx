import Infos, {InfosProps} from "../molecules/Infos";

export function InfosContent(props: InfosContentProps) {
    return (
        <Infos {...props} />
    );
}

export interface InfosContentProps extends InfosProps {
}

export default InfosContent;
