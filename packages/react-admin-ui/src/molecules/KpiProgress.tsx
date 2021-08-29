import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Progress from '../atoms/Progress';
import Block, { BaseBlockProps } from '../atoms/Block';
import { rich_text } from '../types';
import useBlock from '../hooks/useBlock';
import { WithText, WithValueAsNumber } from '../withs';

export function KpiProgress({ goal, text, unit, value, ...props }: KpiProgressProps) {
    const [bProps] = useBlock(props);

    return (
        <Block {...bProps}>
            <Div center flex spaced>
                <Div col>
                    <Text color={props.color} text={text} variant={'description'} className={'flex-1'} />
                    <Div flex inline>
                        <Text color={props.color} text={value || ''} variant={'title3'} className={'flex-1'} />
                        <Text color={props.color} text={unit} variant={'title3'} className={'flex-1'} />
                    </Div>
                </Div>
            </Div>
            <Progress value={(value / goal) * 100} />
        </Block>
    );
}

export interface KpiProgressProps extends BaseBlockProps, WithText, Required<WithValueAsNumber> {
    goal: number;
    unit?: rich_text;
}

// noinspection JSUnusedGlobalSymbols
export default KpiProgress;
