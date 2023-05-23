import Provider from './Provider';
import useTemplateComponent from '../hooks/useTemplateComponent';

const defaultConfig = {};

export function Template({ type, config = defaultConfig, ...props }: TemplateProps) {
    const Comp = useTemplateComponent(type);

    return (
        <Provider config={config} {...props}>
            {!!Comp && <Comp {...config} templateType={type} />}
        </Provider>
    );
}

export interface TemplateProps {
    type: string;
    config?: any;
    locale?: string;
    env?: string;
}

export default Template;
