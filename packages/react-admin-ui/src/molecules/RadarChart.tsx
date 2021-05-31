import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import tailwindConfig from "../../tailwind.config"
import {box_color, box_variant} from "../types";

const tailwindTextColors = tailwindConfig.theme.extend.textColors;
const tailwindChartColors = tailwindConfig.theme.extend.chartColors;
const tailwindChartBgColors = tailwindConfig.theme.extend.chartBgColors;
const defaultOptions: ApexOptions = {
    legend: {
      show: true
    },
    stroke: {
        show: true,
        width: 3,
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "16px",
            }
        }
    },
    markers: {
        size: 6,
        colors: ['#EEE'],
        strokeWidth: 3,
        hover: {
            size: 10
        }
    },
    responsive: [{
        breakpoint: 700,
        options: {
            stroke: {
                width: 2,
            },
            xaxis: {
                labels: {
                    style: {
                        fontSize: "10px",
                    }
                }
            },
            markers: {
                size: 4,
                strokeWidth: 2,
                hover: {
                    size: 7
                }
            },
        }
    }]
};

export function RadarChart({variant = 'filled', color = 'primary', isMenu = true, labels = [], series = []}: RadarChartProps) {
    const col = `${variant}_${color}`;
    const options = {...defaultOptions, chart: {toolbar: {show: isMenu}}, labels: labels, colors: tailwindChartColors[col], plotOptions: {radar: {polygons: {fill: {colors: tailwindChartBgColors[col]}}}}, markers: {...defaultOptions.markers || {}}, xaxis: {...defaultOptions.xaxis || {}}};
    options.markers.strokeColors = tailwindChartColors[col];
    let buffer: string[] = [];
    if (series && series[0] && series[0].data) {
        for (let n = 0; n < series[0].data.length; n++) {
            buffer.push(tailwindTextColors[`${col}2`]);
            options.xaxis.labels!.style!.colors = buffer;
        }
    }
    return (
        <Chart options={options} series={series} type="radar" />
    );
}

export interface RadarChartProps {
    isMenu?: boolean,
    labels?: string[],
    color?: box_color,
    series?: {name?: string, data?: number[]}[],
    variant?: box_variant,
}

export default RadarChart