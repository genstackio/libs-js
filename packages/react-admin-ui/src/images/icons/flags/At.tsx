import * as React from 'react';

function SvgAt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#fff" d="M640 480H0V0h640z" />
                <path fill="#df0000" d="M640 480H0V319.997h640zm0-319.875H0V.122h640z" />
            </g>
        </svg>
    );
}

export default SvgAt;
