import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import tailwindConfig from "../../tailwind.config"
import {box_color, box_variant} from "../types";

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;

const defaultOptions : ApexOptions = {

    chart: {
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
        redrawOnParentResize: true
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    grid: {
        show: false
    },
    xaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        show: false
    },
    stroke: {
        show:false
    },

};

export function AreaChart({series, variant = 'filled', color = 'primary'}: AreaChartProps) {
    const col = `${variant}_${color}`;
    const options = {...defaultOptions, colors: tailwindChartColors[col],};

    const newData: {data: number[]}[] = series.reduce((acc, data) => {
        acc.push({data: data});
        return acc;
    }, [] as {data: number[]}[]);

    return (
        <Chart type='area' options={options} series={newData} height={'250px'}/>
    );
}

export interface AreaChartProps {
    series: number[][],
    color?: box_color,
    variant?: box_variant,
}

export default AreaChart