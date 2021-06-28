import * as React from 'react';

function SvgGa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#ffe700" d="M640 480H0V0h640z" />
                <path fill="#36a100" d="M640 160.003H0V0h640z" />
                <path fill="#006dbc" d="M640 480H0V319.997h640z" />
            </g>
        </svg>
    );
}

export default SvgGa;
