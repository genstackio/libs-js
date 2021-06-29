import * as React from 'react';

function SvgIe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h639.995v480.004H0z" />
                <path fill="#009A49" d="M0 0h213.334v480.004H0z" />
                <path fill="#FF7900" d="M426.668 0h213.334v480.004H426.668z" />
            </g>
        </svg>
    );
}

export default SvgIe;
