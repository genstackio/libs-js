import clsx from 'clsx';
import Progress from '../../atoms/Progress';
import { rich_text } from '../../types';
import { WithClassName } from '../../withs';

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

export interface UsageChartProps extends WithClassName {
    max: number;
    unit?: rich_text;
    value: number;
}

export default UsageChart;
