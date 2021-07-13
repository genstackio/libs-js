import * as React from 'react';

function SvgNe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#0db02b" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M0 0h640v320H0z" />
            <path fill="#e05206" d="M0 0h640v160H0z" />
            <circle cx={320} cy={240} r={68} fill="#e05206" />
        </svg>
    );
}

export default SvgNe;
