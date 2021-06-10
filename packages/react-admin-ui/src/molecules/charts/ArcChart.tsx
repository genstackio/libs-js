import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import tailwindConfig from "../../../tailwind.config"
import {box_color} from "../../types";

const tailwindColors = tailwindConfig.theme.extend.colors;

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
        show: false
    },
    plotOptions: {
        radialBar: {
            inverseOrder: true,
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: true,
                    fontSize: '2em',
                    fontWeight: 600,
                    formatter: function (val) {
                        return val + '%'
                    }
                }
            },
        },
    },
};

export function ArcChart({color = 'primary', value}: ArcChartProps) {
    const options = {...defaultOptions, colors: [tailwindColors[color]], plotOptions:{...defaultOptions.plotOptions || {}}};
    options.plotOptions.radialBar!.dataLabels!.value!.color = tailwindColors[color];

    return (
        <Chart type='radialBar' options={options} series={[[value]]} />
    );
}

export interface ArcChartProps {
    color?: box_color,
    value: number,
}

export default ArcChart
