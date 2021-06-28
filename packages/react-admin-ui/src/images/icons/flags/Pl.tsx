import * as React from 'react';

function SvgPl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path fill="#e9e8e7" d="M640 480H0V0h640z" />
                <path fill="#d4213d" d="M640 480H0V240h640z" />
            </g>
        </svg>
    );
}

export default SvgPl;
