import {Progress} from "../atoms";

export function UsageChart({value, max, unit}: UsageChartProps) {
    return (
        <div>
            <Progress value={value / max * 100} />
            <div className={'flex justify-between items-center'}>
                <div className={'mt-2'}>
                    <p>{value} {unit} / {max} {unit}</p>
                </div>
            </div>
        </div>
    );
}

export interface UsageChartProps {
    value: number,
    max: number,
    unit?: string,
}

export default UsageChart