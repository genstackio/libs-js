import {Progress} from "../atoms";

export function UsageChart({max, unit, value}: UsageChartProps) {
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
    max: number,
    unit?: string,
    value: number,
}

export default UsageChart