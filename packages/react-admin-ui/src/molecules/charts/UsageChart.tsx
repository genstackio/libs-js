import { Progress } from '../../atoms';
import { class_name, rich_text } from '../../types';
import clsx from 'clsx';

export function UsageChart({ className, max, unit, value }: UsageChartProps) {
    return (
        <div className={clsx(className)}>
            <Progress value={(value / max) * 100} />
            <div className={'flex justify-between items-center'}>
                <div className={'mt-2'}>
                    <p>
                        {value} {unit} / {max} {unit}
                    </p>
                </div>
            </div>
        </div>
    );
}

export interface UsageChartProps {
    className?: class_name;
    max: number;
    unit?: rich_text;
    value: number;
}

export default UsageChart;
