import * as React from 'react';

function SvgUa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#ffd500" d="M0 0h640v480H0z" />
                <path fill="#005bbb" d="M0 0h640v240H0z" />
            </g>
        </svg>
    );
}

export default SvgUa;
