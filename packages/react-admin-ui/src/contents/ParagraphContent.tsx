import Paragraph, { ParagraphProps } from '../molecules/Paragraph';

export function ParagraphContent(props: ParagraphContentProps) {
    return <Paragraph {...props} />;
}

export type ParagraphContentProps = ParagraphProps;

export default ParagraphContent;
