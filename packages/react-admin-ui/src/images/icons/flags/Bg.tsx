import * as React from 'react';

function SvgBg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#d62612" d="M0 319.997h640V480H0z" />
                <path fill="#fff" d="M0 0h640v160.003H0z" />
                <path fill="#00966e" d="M0 160.003h640v160.003H0z" />
            </g>
        </svg>
    );
}

export default SvgBg;
