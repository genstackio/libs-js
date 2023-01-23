import Content from './Content';
import prepareContent from '../utils/prepareContent';

const defaultComponents = {};
const defaultOptions = {};

export function Contents({ content = [], components = defaultComponents, options = defaultOptions }: ContentsProps) {
    if (!content) return null;
    if (!Array.isArray(content)) content = [content];
    return (content || []).map((c: any, i: number) => (
        <Content key={i} {...prepareContent(c)} components={components} options={options} />
    ));
}

export interface ContentsProps {
    content?: any;
    components?: { [key: string]: any };
    options?: { [key: string]: any };
}

export default Contents;
