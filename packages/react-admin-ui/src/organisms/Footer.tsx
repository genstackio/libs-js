import {rich_text} from "../types";

export function Footer({content}: FooterProps) {
    return (
        <div className={'p-4 text-center text-sm'}>{content}</div>
    );
}

export interface FooterProps {
    content?: rich_text,
}

export default Footer