import clsx from 'clsx';
import { class_name, rich_text } from '../types';

export function Footer({ className, content }: FooterProps) {
    return <div className={clsx('p-4 text-center text-sm', className)}>{content}</div>;
}

export interface FooterProps {
    className?: class_name;
    content?: rich_text;
}

export default Footer;
