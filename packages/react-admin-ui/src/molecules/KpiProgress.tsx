import {ReactNode} from 'react';
import {BaseBlockProps, Block, Progress} from "../atoms";

export function KpiProgress({goal, text, unit, value, ...props}: KpiProgressProps) {
    return (
        <Block {...props}>
            <div className={'flex justify-between items-center'}>
                <div className={'flex-col'}>
                    <h5 className={'flex-1'}>{text}</h5>
                    <div className={'text-bold text-4xl flex-1'}>
                        <p>{value || ''}{unit}</p>
                    </div>
                </div>
            </div>
            <Progress value={value / goal * 100} />
        </Block>
    );
}

export interface KpiProgressProps extends BaseBlockProps {
    goal: number,
    text?: ReactNode,
    unit?: string,
    value: number,
}

export default KpiProgress