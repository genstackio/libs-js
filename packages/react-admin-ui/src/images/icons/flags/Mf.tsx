import * as React from 'react';

function SvgMf(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#00267f" d="M0 0h213.337v480H0z" />
                <path fill="#f31830" d="M426.662 0H640v480H426.662z" />
            </g>
        </svg>
    );
}

export default SvgMf;
