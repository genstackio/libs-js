import * as React from 'react';

function SvgPl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#e9e8e7" d="M640 480H0V0h640z" />
                <path fill="#d4213d" d="M640 480H0V240h640z" />
            </g>
        </svg>
    );
}

export default SvgPl;
