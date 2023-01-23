import Row from '../atoms/Row';
import Contents from '../molecules/Contents';

export function RowContent({ content = [], ...rest }: RowContentProps) {
    return (
        <Row gap={4}>
            <Contents content={content} {...rest} />
        </Row>
    );
}

export interface RowContentProps {
    content?: any[];
}

export default RowContent;
