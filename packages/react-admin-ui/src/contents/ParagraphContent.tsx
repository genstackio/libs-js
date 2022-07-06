import Paragraph, {ParagraphProps} from "../molecules/Paragraph";

export function ParagraphContent(props: ParagraphContentProps) {
    return (
        <Paragraph {...props} />
    );
}

export interface ParagraphContentProps extends ParagraphProps {
}

export default ParagraphContent;
