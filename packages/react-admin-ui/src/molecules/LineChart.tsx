import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import tailwindConfig from "../../tailwind.config"
import {box_color, box_variant} from "../types";

const tailwindChartColors = tailwindConfig.theme.extend.chartColors;
const defaultOptions: ApexOptions = {
    chart: {
        toolbar: {
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
    }
};

export function LineChart({series, labels, title, color= 'primary', variant = 'filled'}: LineChartProps) {
    const col = `${variant}_${color}`;
    const options = {...defaultOptions, labels: labels, colors: tailwindChartColors[col]};
    const datas = [] as any;
    series.forEach(data => {
        datas.push({data});
    });
    return (
        <div>
            <h3>{title}</h3>
        <Chart options={options} series={datas} type="line" />
        </div>
    );
}

export interface LineChartProps {
    series: any,
    labels?: string[],
    title?: string,
    color?: box_color,
    variant?: box_variant,
}

export default LineChart