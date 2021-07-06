import clsx from 'clsx';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import tailwindConfig from '../../../tailwind.config';
import { box_color, box_variant, chart_series, class_name, rich_text } from '../../types';
import Text from '../../atoms/Text';

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
        <div className={clsx(className)}>
            <Text text={title} variant={'subtitle'} />
            <Chart options={options} series={datas} type={'line'} />
        </div>
    );
}

export interface LineChartProps {
    className?: class_name;
    color?: box_color;
    labels?: string[];
    series: chart_series;
    title?: rich_text;
    variant?: box_variant;
}

export default LineChart;
