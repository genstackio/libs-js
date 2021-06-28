import * as React from 'react';

function SvgBw(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#00cbff" d="M0 0h640v480H0z" />
                <path fill="#fff" d="M0 160h640v160H0z" />
                <path d="M0 185.97h640v108.05H0z" />
            </g>
        </svg>
    );
}

export default SvgBw;
