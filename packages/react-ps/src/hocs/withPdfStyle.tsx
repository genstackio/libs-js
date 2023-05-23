import buildStyles from '../utils/buildStyles';
import { ComponentType, useContext } from 'react';
import StyleConfigContext from '../contexts/StyleConfigContext';

export function withPdfStyle<T = any>(Comp: ComponentType<T>): ComponentType<T> {
    return function StylesComponent<T = {}>(props: T) {
        const styleConfig = useContext(StyleConfigContext);
        const [styles, rest] = buildStyles(props, styleConfig);

        // @ts-ignore
        return <Comp style={styles} {...rest} />;
    } as ComponentType<T>;
}

export default withPdfStyle;
