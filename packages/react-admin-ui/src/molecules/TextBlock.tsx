import Block, { BaseBlockProps } from '../atoms/Block';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import Cell from '../atoms/Cell';
import Column from '../atoms/Column';
import useBlock from '../hooks/useBlock';
import { WithIcon, WithText, WithTitle } from '../withs';

export function TextBlock({ icon, text, title, ...props }: TextBlockProps) {
    const [bProps] = useBlock(props);

    return (
        <Block {...bProps}>
            <Row center spaced>
                <Column>
                    <Text text={title} variant={'title5'} className={'flex-1'} />
                    <Cell>
                        <Text text={text} variant={'body'} />
                    </Cell>
                </Column>
                <Icon icon={icon} className={'mt-2 sm:ml-2'} />
            </Row>
        </Block>
    );
}

export interface TextBlockProps extends BaseBlockProps, WithText, WithTitle, WithIcon {}

// noinspection JSUnusedGlobalSymbols
export default TextBlock;
