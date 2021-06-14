import {Progress} from "../atoms";
import {rich_text} from "../types";

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
    unit?: rich_text,
    value: number,
}

export default UsageChart