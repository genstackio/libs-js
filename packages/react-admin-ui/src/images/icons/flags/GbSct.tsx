import * as React from 'react';

function SvgGbSct(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#0065bd" d="M0 0h640v480H0z" />
            <path d="M0 0l5 3M0 3l5-3" stroke="#fff" strokeWidth={0.6} transform="scale(128 160)" />
        </svg>
    );
}

export default SvgGbSct;
