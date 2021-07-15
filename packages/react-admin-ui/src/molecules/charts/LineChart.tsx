import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { chart_series } from '../../types';
import Text from '../../atoms/Text';
import { WithBox, WithClassName, WithTitle } from '../../withs';

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;
const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            tools: {
                download: true,
                pan: false,
                reset: false,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
            },
        },
    },
};

export function LineChart({ className, color = 'primary', labels, series, title, variant = 'filled' }: LineChartProps) {
    const col = `${variant}_${color}`;
    const options = { ...defaultOptions, labels: labels, colors: tailwindChartColors[col] };
    const datas: any = [];
    series.forEach((data) => {
        datas.push({ data });
    });
    return (
        <div className={className}>
            <Text text={title} variant={'subtitle'} />
            <Chart options={options} series={datas} type={'line'} />
        </div>
    );
}

export interface LineChartProps extends WithClassName, WithBox, WithTitle {
    labels?: string[];
    series: chart_series;
}

export default LineChart;
