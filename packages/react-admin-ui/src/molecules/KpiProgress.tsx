import Block, { BaseBlockProps } from '../atoms/Block';
import Progress from '../atoms/Progress';
import Text from '../atoms/Text';
import { rich_text } from '../types';
import { WithText, WithValueAsNumber } from '../withs';
import useBlock from '../hooks/useBlock';

export function KpiProgress({ goal, text, unit, value, ...props }: KpiProgressProps) {
    const [bProps] = useBlock(props);
    return (
        <Block {...bProps}>
            <div className={'flex justify-between items-center'}>
                <div className={'flex-col'}>
                    <Text className={'flex-1'} variant={'description'} text={text} color={props.color} />
                    <div className={'flex inline'}>
                        <Text className={'flex-1'} variant={'title3'} text={value || ''} color={props.color} />
                        <Text className={'flex-1'} variant={'title3'} text={unit} color={props.color} />
                    </div>
                </div>
            </div>
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
