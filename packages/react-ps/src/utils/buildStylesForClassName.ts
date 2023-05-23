import classesConfig from '../configs/classes';
import { convertStyleValue } from './convertStyleValue';

export function buildStylesForClassName(name: string, styleConfig: any = {}): [string[], object] {
    const classNames: string[] = [];
    const styles = {};
    if (!name) return [classNames, styles];

    if (!classesConfig[name] && !styleConfig[name]) {
        classNames.push(name);
    } else {
        const cfg = {
            ...(classesConfig[name] || {}),
            ...(styleConfig[name] || {}),
        };
        // rem unit is not fully supported in pdfs.
        // to avoid problems, we convert XX.Xrem values in YY.Ypx where YY.Y = XX.X * 16
        Object.assign(
            styles,
            Object.entries(cfg).reduce((acc, [k, v]) => Object.assign(acc, { [k]: convertStyleValue(v) }), {}),
        );
    }
    return [classNames, styles];
}

export default buildStylesForClassName;
