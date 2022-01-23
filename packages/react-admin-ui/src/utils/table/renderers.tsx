import {GridCellParams} from "@material-ui/data-grid";
import Badge from "../../atoms/Badge";
import Icon from "../../atoms/Icon";
import FlagIcon from "../../atoms/FlagIcon";
import Image from "../../atoms/Image";
import Rating from "../../atoms/Rating";
import Spinner from "../../atoms/Spinner";
import Tag from "../../atoms/Tag";

function colval(params: GridCellParams, col: any): any {
    return params.getValue(params.id, col.id);
}

export const badge = col => (params: GridCellParams) => (
    <Badge
        text={(colval(params, col) as string) || ''}
        type={'pill'}
        variant={'contained'}
        color={'light'}
    />
);
export const flag = col => (params: GridCellParams) => (
    <FlagIcon locale={colval(params, col) as string} />
);
export const icon = col => (params: GridCellParams) => (
    <Icon icon={colval(params, col) as string} />
);
export const image = col => (params: GridCellParams) => (
    <Image {...(colval(params, col) as any)} />
);
export const rating = col => (params: GridCellParams) => (
    <Rating value={colval(params, col) as any} />
);
export const spinner = col => (params: GridCellParams) => (
    <Spinner />
);
export const tag = col => (params: GridCellParams) => (
    <Tag text={colval(params, col) as string}/>
);
export const custom = col => (params: GridCellParams) => col.render!(params.getValue(params.id, col.id), params);

export const unknown = () => undefined;
