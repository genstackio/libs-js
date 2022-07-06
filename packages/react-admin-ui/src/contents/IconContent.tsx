import Icon, {IconProps} from "../atoms/Icon";

export function IconContent(props: IconContentProps) {
    return (
        <Icon {...props} />
    );
}

export interface IconContentProps extends IconProps {
}

export default IconContent;
