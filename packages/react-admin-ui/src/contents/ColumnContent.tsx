import Column from '../atoms/Column';
import Contents from '../molecules/Contents';

export function ColumnContent({ content = [], ...rest }: ColumnContentProps) {
    return (
        <Column gap={4}>
            <Contents content={content} {...rest} />
        </Column>
    );
}

export interface ColumnContentProps {
    content?: any[];
}

// noinspection JSUnusedGlobalSymbols
export default ColumnContent;
