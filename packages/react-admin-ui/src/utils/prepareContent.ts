export function prepareContent(def: any) {
    if (Array.isArray(def)) {
        const [type, content] = def;
        return {type, content};
    }
    if ('string' === typeof def) {
        let autoFocus = false;
        if ('!' === def.slice(0, 1)) {
            autoFocus = true;
            def = def.slice(1);
        }
        if ('$' === def.slice(0, 1)) {
            let required = false;
            def = def.slice(1);
            if ('submit' === def) return {type: 'form_submit'};
            if ('!' === def.slice(-1)) {
                required = true;
                def = def.slice(0, -1);
            }
            let disabled = false;
            if (':readonly' === def.slice(-9)) {
                disabled = true;
                def = def.slice(0, -9);
            }
            return {type: 'form_field', name: def, required, autoFocus, disabled}
        }
        return {type: 'unknown', name: def, autoFocus}
    }
    return def;
}

// noinspection JSUnusedGlobalSymbols
export default prepareContent;
