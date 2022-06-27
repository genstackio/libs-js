import filterObject from "./filterObject";
import base64encode from "./base64encode";

export function cleanData(raw: any, keptKeys: (string|string[])[] = [], createMode = false) {
    raw = raw || {};
    return (keptKeys.length ? keptKeys : Object.keys(raw)).reduce((acc: any, kk: string|string[]) => {
        const [k, t] = 'string' === typeof kk ? [kk, 'raw'] : kk;
        acc[k] = raw[k];
        if ('' === acc[k]) {
            if (createMode) {
                delete acc[k];
            }
            else {
                acc[k] = '**clear**';
            }
        }
        else if (undefined === acc[k]) delete acc[k];
        else if (null === acc[k]) delete acc[k];
        else if (Array.isArray(acc[k])) {}
        else if ('object' === typeof acc[k]) {
            if ('Image' === k.slice(-5)) {
                if (!acc[k] || !acc[k]['_previewUrl']) {
                    delete acc[k];
                } else acc[k] = filterObject(acc[k]);
            } else if ('Css' === k.slice(-3)) {
                if (acc[k] && acc[k]['available']) { // not changed
                    delete acc[k];
                }
                else {
                    acc[k] = filterObject(acc[k]);
                    acc[k] = {content: acc[k].content ? base64encode(acc[k].content) : '**clear**'};
                }
            } else if ('Js' === k.slice(-2)) {
                if (acc[k] && acc[k]['available']) { // not changed
                    delete acc[k];
                }
                else {
                    acc[k] = filterObject(acc[k]);
                    acc[k] = {content: acc[k].content ? base64encode(acc[k].content) : '**clear**'};
                }
            } else if ('File' === k.slice(-4)) {
                if (acc[k] && ('undefined' !== typeof acc[k]['available'])) { // not changed
                    delete acc[k];
                }
                else {
                    acc[k] = filterObject(acc[k]);
                }
            } else {
                acc[k] = filterObject(acc[k]);
            }
        }
        else if (('string' === typeof acc[k]) && ('At' === k.slice(-2))) {
            acc[k] = new Date(acc[k]).getTime();
        }
        if ('**clear**' !== acc[k]) {
            switch (t) {
                case 'object':
                    if ('' !== acc[k] && null !== acc[k] && undefined !== acc[k]) {
                        if ('string' === typeof acc[k]) {
                            acc[k] = JSON.parse(acc[k]);
                        }
                    } else {
                        delete acc[k];
                    }
                    break;
                case 'number':
                    if ('' !== acc[k] && null !== acc[k] && undefined !== acc[k]) {
                        acc[k] = Number(acc[k]);
                    } else {
                        delete acc[k];
                    }
                    break;
                case 'raw':
                    break;
                default:
                    break;
            }
        }
        return acc;
    }, {});
}

export default cleanData;
