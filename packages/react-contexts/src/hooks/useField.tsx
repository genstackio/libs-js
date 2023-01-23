import { useMemo } from 'react';
import useFields from './useFields';
import useComponent from './useComponent';

export const useField = (type: string) => {
    const fields = useFields();

    const def = useMemo(() => {
        let x: any = { type };
        let z: any = { ...x };
        const t: any = {};
        let i = 0;
        while (!!z && !t[x.type] && i < 50) {
            z = fields[x.type];
            x = { ...x, ...(z || {}) };
            t[x.type || ''] = true;
            i++;
        }
        return x;
    }, [type, fields]);
    const BaseComp = useComponent('form_field', def?.type);

    return useMemo(() => {
        const { type, ...rest } = def;
        return Object.keys(rest).length ? (props: any) => <BaseComp {...rest} {...props} /> : BaseComp;
    }, [BaseComp, def]);
};

export default useField;
