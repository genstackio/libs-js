import { useMemo } from 'react';
import ApexChart from 'react-apexcharts';
import { chart_series } from '../types';
export { ApexOptions as ChartOptions } from 'apexcharts';

export function Chart({ series = [], ...props }: ChartProps) {
    return <ApexChart series={useMemo(() => series.map((s) => ({ data: s })), [series])} {...props} />;
}

export interface ChartProps {
    series?: chart_series;
    [key: string]: any;
}

// noinspection JSUnusedGlobalSymbols
export default Chart;
