import Block from '../atoms/Block';
import Contents from '../molecules/Contents';

export function BlockContent({ content = [], ...rest }: BlockContentProps) {
    return (
        <Block corner={'none'} className={'w-full'}>
            <Contents content={content} {...rest} />
        </Block>
    );
}

export interface BlockContentProps {
    content?: any[];
}

export default BlockContent;
