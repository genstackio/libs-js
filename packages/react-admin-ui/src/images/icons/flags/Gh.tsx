import * as React from 'react';

function SvgGh(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#006b3f" d="M0 0h640v480H0z" />
            <path fill="#fcd116" d="M0 0h640v320H0z" />
            <path fill="#ce1126" d="M0 0h640v160H0z" />
            <path d="M320 160l51.987 160-136.104-98.885h168.234L268.013 320z" />
        </svg>
    );
}

export default SvgGh;
