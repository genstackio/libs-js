import { GridCellParams } from '@material-ui/data-grid';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';
import FlagIcon from '../../atoms/FlagIcon';
import Image from '../../atoms/Image';
import Rating from '../../atoms/Rating';
import Spinner from '../../atoms/Spinner';
import Tag from '../../atoms/Tag';
import clsx from 'clsx';

function colval(params: GridCellParams, col: any): any {
    return params.getValue(params.id, col.id);
}

export const badge = (col) => (params: GridCellParams) =>
    <Badge text={(colval(params, col) as string) || ''} type={'pill'} variant={'contained'} color={'light'} />;
export const flag = (col) => (params: GridCellParams) => <FlagIcon locale={colval(params, col) as string} />;
export const icon = (col) => (params: GridCellParams) => <Icon icon={colval(params, col) as string} />;
export const image = (col) => (params: GridCellParams) => <Image {...(colval(params, col) as any)} />;
export const rating = (col) => (params: GridCellParams) => <Rating value={colval(params, col) as any} />;
export const spinner = (col) => (params: GridCellParams) => <Spinner />;
export const tag = (col) => (params: GridCellParams) => <Tag text={colval(params, col) as string} />;
export const custom = (col) => (params: GridCellParams) => col.render!(params.getValue(params.id, col.id), params);
export const component = (col) => (params: GridCellParams) => {
    const Comp = (col?.components || {})[col.component || ''] || undefined;
    return Comp ? <Comp value={params.getValue(params.id, col.id)} row={params.row} col={col} params={params} /> : null;
}

export const unknown = () => undefined;

const colorSizes = {
    xxs: 'w-2 h-2',
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    xl: 'w-10 h-10',
};
const colorShapes = {
    circle: 'rounded-full',
    square: '',
    'rounded-square': 'rounded-sm',
};

export const colors = (col) => (params: GridCellParams) => {
    const defaultColorShape = 'rounded-square';
    const defaultColorSize = 'sm';
    const size = colorSizes[col.colorSize || defaultColorSize] || colorSizes[defaultColorSize];
    const shape = colorShapes[col.colorShape || defaultColorShape] || colorShapes[defaultColorShape];
    const colors = (col.colors || [])
        .map((c: string) => params.row[c])
        .filter((x: any) => !!x)
        .map((c: string, index: number) => {
            return <div key={index} className={clsx('border', size, shape)} style={{ backgroundColor: c }} />;
        });
    return (
        <div className={'p-2'}>
            <div className={'flex gap-1'}>{colors}</div>
        </div>
    );
};
