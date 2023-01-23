import Infos, { InfosProps } from '../molecules/Infos';

export function InfosContent(props: InfosContentProps) {
    return <Infos {...props} />;
}

export type InfosContentProps = InfosProps;

export default InfosContent;
