import * as React from 'react';

function SvgCi(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#00cd00" d="M426.83 0H640v480H426.83z" />
                <path fill="#ff9a00" d="M0 0h212.88v480H0z" />
                <path fill="#fff" d="M212.88 0h213.95v480H212.88z" />
            </g>
        </svg>
    );
}

export default SvgCi;