import Chart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import {box_color} from "../types";
import tailwindConfig from "../../tailwind.config";
import Text from "../atoms/Text"

const tailwindColors = tailwindConfig.theme.extend.colors;

const defaultOptions : ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
    },
    legend: {
        show: false
    },
    grid: {
        show: false
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            inverseOrder: true,
            hollow: {
                margin: 40,
                size: "80%",
                background: '#f7edff',
            },
            track: {
                background: '#f7f0f0',
                opacity: 0.5 ,
            },
            dataLabels: {
                name: {
                    color: "#8258fc",
                    fontSize: "1.5em",
                },
                value: {
                    fontSize: "1em",
                    show: true,
                    fontFamily: undefined,
                    color: "#000000",
                }
            }
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: 'light',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            gradientToColors: ['#c170fc'],
            type: 'horizontal'
        }
    },
    stroke: {
        dashArray: 24 ,
    }
};

export function RateChart({value, color = 'primary', title, subtitle, overline}: RateChartProps) {
    const options = {...defaultOptions, colors: [tailwindColors[color]], labels: [title]};
    return (
        <div>
            <Chart type='radialBar' options={options} series={[[value]]} height={'450px'} />
            <div className={'text-center mt-2'}>
                <Text text={subtitle} color={color} variant={'title6'}/>
                <Text text={overline}/>
            </div>
        </div>

    );
};

export interface RateChartProps {
    value: number,
    color?: box_color,
    title: string,
    subtitle: string,
    overline: string,
}

export default RateChart