import Text from './Text';
import { WithValue } from '../withs';
import Column from "./Column";
import Div from "./Div";
import Progress from "./Progress";
import Alert from "./Alert";
import Badge from "./Badge";
import Panel from "./Panel";
import Pill from "./Pill";
import Rating from "./Rating";
import Spinner from "./Spinner";
import Tag from "./Tag";

export function InfosItemValue({value, complexValueComponent: ComplexValueComponent, type}: InfosItemValueProps) {
    switch (type) {
        case 'alert':
            return <Alert>{value}</Alert>;
        case 'badge':
            return <Badge text={value} />;
        case 'panel':
            return <Panel>{value}</Panel>;
        case 'pill':
            return <Pill text={value} />;
        case 'rating':
        case 'rating10':
            return <Rating min={1} max={10} value={value} defaultValue={value} text={value} />;
        case 'rating5':
            return <Rating min={1} max={5} value={value} defaultValue={value} text={value} />;
        case 'rating20':
            return <Rating min={1} max={20} value={value} defaultValue={value} text={value} />;
        case 'rating_squares':
        case 'rating10_squares':
            return <Rating variant={'squares'} min={1} max={10} value={value} defaultValue={value} text={value} />;
        case 'rating5_squares':
            return <Rating variant={'squares'} min={1} max={5} value={value} defaultValue={value} text={value} />;
        case 'rating20_squares':
            return <Rating variant={'squares'}  min={1} max={20} value={value} defaultValue={value} text={value} />;
        case 'progress':
            return <Div w={"xl"} vcenter mt={'sm'}><Progress value={value} />{Math.round(value * 100) / 100}%</Div>;
        case 'ratio':
            return <Div w={"xl"} vcenter mt={'sm'}><Progress value={(value >= 0) ? (value * 100) : 0} />{Math.round(value * 10000) / 100}%</Div>;
        case 'spinner':
            return <Spinner />;
        case 'tag':
            return <Tag text={value} />;
        case 'text':
            return <Text text={value} />;
        case 'code':
            let newValue: any;
            if ('string' === typeof value) {
                try {
                    newValue = JSON.stringify(JSON.parse(value), null, 4);
                } catch(e: any) {
                    newValue = value;
                }
            } else {
                newValue = JSON.stringify(value, null, 4);
            }
            return <pre>{newValue}</pre>;
        case 'default':
        default:
            switch (typeof value) {
                case 'boolean': return <Text text={value ? 'true' : 'false'} />;
                case 'number': return <Text text={value} />;
                case 'string':
                    if (('{' === value.slice(0, 1)) && ('}' === value.slice(-1))) {
                        let newValue: any;
                        try {
                            newValue = JSON.parse(value);
                        } catch (e) {
                            newValue = undefined;
                        }
                        if (newValue) {
                            return <InfosItemValue value={newValue} complexValueComponent={ComplexValueComponent} />;
                        }
                        return <Text text={value} />;
                    }
                    return <Text text={value} />;
                case 'undefined': return <Text text={'undefined'} component={'pre'} />;
                case 'function': return <Text text={'Function'} />;
                case 'object':
                    if (null === value) return <Text text={'null'} component={'pre'} />;
                    if (Array.isArray(value)) {
                        if (!value.length) return <Text text={'[]'} component={'pre'} />;
                        if (ComplexValueComponent) {
                            return (
                                <Column>
                                    {value.map((v, index) => <Div flex><ComplexValueComponent key={index} label={index} value={v} mt={0}/></Div>)}
                                </Column>
                            );
                        }
                        return <Text text={JSON.stringify(value, null, 4)} component={'pre'} />;
                    }
                    if (ComplexValueComponent) {
                        return (
                            <Column>
                                {Object.entries(value).map(([k, v]) => <Div flex><ComplexValueComponent key={k} label={k} value={v} mt={0}/></Div>)}
                            </Column>
                        );
                    }
                    return <Text text={JSON.stringify(value, null, 4)} component={'pre'} />;
                default: return <Text text={JSON.stringify(value, null, 4)} component={'pre'} />
            }
    }
}
export interface InfosItemValueProps extends WithValue {
    complexValueComponent?: any;
    type?: 'default' | 'progress' | 'alert' | 'badge' | 'panel' | 'pill' | 'ratio' | 'rating' | 'rating5' | 'rating10' | 'rating20' | 'rating_squares' | 'rating5_squares' | 'rating10_squares' | 'rating20_squares' | 'spinner' | 'tag' | 'text' | 'code';
}

export default InfosItemValue;

