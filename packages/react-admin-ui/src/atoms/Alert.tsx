import Icon from './Icon';
import Buttons from './Buttons';
import Section from './Section';
import Panel, { PanelProps } from './Panel';
import useIcon from '../hooks/useIcon';
import useCloser from '../hooks/useCloser';
import useButtons from '../hooks/useButtons';
import { WithClosable, WithIcon, WithMessage, WithTitle } from '../withs';

export function Alert({ children, message, title, ...props }: AlertProps) {
    const [Closer, show, rest3] = useCloser(props);
    const [btProps, rest2] = useButtons(rest3);
    const [icProps, rest] = useIcon(rest2);
    const content = children || message;

    if (!show || !(content || title)) return null;

    return (
        <Panel row {...rest}>
            <Icon {...icProps} className={'mr-2'} />
            <Section title={title}>{content}</Section>
            <Buttons mx={'sm'} {...btProps} />
            <Closer />
        </Panel>
    );
}

export interface AlertProps extends PanelProps, WithClosable, WithIcon, WithMessage, WithTitle {}

// noinspection JSUnusedGlobalSymbols
export default Alert;
