import clsx from 'clsx';
import { WithClassName, WithContent } from '../withs';

export function Footer({ className, content }: FooterProps) {
    return <div className={clsx('p-4 text-center text-sm', className)}>{content}</div>;
}

export interface FooterProps extends WithClassName, WithContent {}

export default Footer;
