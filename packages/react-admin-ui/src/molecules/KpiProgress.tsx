import {BaseBlockProps, Block, Progress, Text} from "../atoms";
import {rich_text} from "../types";

export function KpiProgress({goal, text, unit, value, ...props}: KpiProgressProps) {
    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'}>
                <div className={'flex-col'}>
                    <Text className={'flex-1'} variant={'description'} text={text} color={props.color} />
                    <div className={'flex inline'}>
                        <Text className={'flex-1'} variant={'title3'} text={value || ''} color={props.color} />
                        <Text className={'flex-1'} variant={'title3'} text={unit} color={props.color} />
                    </div>
                </div>
            </div>
            <Progress value={value / goal * 100} />
        </Block>
    );
}

export interface KpiProgressProps extends BaseBlockProps {
    goal: number,
    text?: rich_text,
    unit?: rich_text,
    value: number,
}

export default KpiProgress