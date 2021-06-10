import Chart from "react-apexcharts";
import {box_color} from "../../types";
import {ApexOptions} from "apexcharts";
import {BaseBlockProps, Block, Text} from "../../atoms";

export function FiguresBlock({items, ...props}: FiguresBlockProps) {
    return (
        <Block padding={'none'} {...props}>
            {items && <div className={'grid grid-cols-4 xs:grid-cols-1 divide-x xs:divide-x-0'}>
                {items.map(({options, series, value, name, color}, index) => (
                    <div className={'p-6 flex-1 flex items-center space-x-2'} key={index}>
                        <Chart width={'80px'} height={'80px'} options={options} series={series} type="bar" />
                        <div>
                            {value && <Text text={`${value}`} color={color} variant={'title6'} />}
                            {name && <Text text={name} color={color} variant={'description'} />}
                        </div>
                    </div>
                ))}
            </div>}
        </Block>
    );
}

export interface FiguresBlockProps extends BaseBlockProps {
    items?: {
        color: box_color,
        name?: string,
        options?: ApexOptions,
        series?: {
            data?: number[]
        }[],
        value?: number,
    }[],
}

export default FiguresBlock