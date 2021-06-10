import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import tailwindConfig from "../../../tailwind.config"
import {box_color, box_variant, chart_series} from "../../types";

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;

const defaultOptions : ApexOptions = {

    chart: {
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true
    },
};

export function CircleChart({color = 'primary', series, variant = 'filled'}: CircleChartProps) {
    const col = `${variant}_${color}`;
    const options = {...defaultOptions, colors: tailwindChartColors[col]};

    return (
        <Chart type={'radialBar'} options={options} series={series} />
    );
}

export interface CircleChartProps {
    color?: box_color,
    series: chart_series,
    variant?: box_variant,
}

export default CircleChart
