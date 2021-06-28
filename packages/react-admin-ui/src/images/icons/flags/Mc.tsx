import * as React from 'react';

function SvgMc(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#f31830" d="M0 0h640v240H0z" />
                <path fill="#fff" d="M0 240h640v240H0z" />
            </g>
        </svg>
    );
}

export default SvgMc;
