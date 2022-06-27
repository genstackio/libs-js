import {useQueryApi} from "@genstackio/react-contexts";
import Spinner from "../Spinner";
import SelectField, {SelectFieldProps} from "./SelectField";
import {useMemo} from "react";

function defaultConvert(item: any) {
    return {value: item.id, label: item.name || item.code || item.id};
}

function useQuerySelectParams({query, dataKey, convert, kind = 'object'}: {query?: string, dataKey?: string, convert?: Function, kind?: string}): {query: string, dataKey: string, convert: Function} {
    query = useMemo(() => query || `FIND_${kind.toUpperCase()}S`, [query, kind]);
    dataKey = useMemo(() => dataKey || `find${kind.slice(0, 1).toUpperCase()}${kind.slice(1)}s`, [dataKey, kind]);
    convert = useMemo(() => convert || defaultConvert, [convert]);

    return useMemo(() => ({query, dataKey, convert}), [query, dataKey, convert]) as {query: string, dataKey: string, convert: Function};
}

export function QuerySelectField({query, dataKey, convert, ...props}: QuerySelectFieldProps) {
    const p = useQuerySelectParams({query, dataKey, convert, ...props});
    const {data, loading} = useQueryApi(p.query);
    const items = (((data || {})[p.dataKey] || {}).items || []).map(p.convert);

    return (
        <>
            {loading && <Spinner />}
            {!loading && (
                <SelectField kind={'queryselect'} {...props} values={items} />
            )}
        </>
    );
}

export interface BaseQuerySelectFieldProps extends SelectFieldProps {
    query?: string;
    convert?: Function;
    dataKey?: string;
}

export interface QuerySelectFieldProps extends BaseQuerySelectFieldProps {
    query?: string;
    convert?: Function;
    dataKey?: string;
}

// noinspection JSUnusedGlobalSymbols
export default QuerySelectField;
