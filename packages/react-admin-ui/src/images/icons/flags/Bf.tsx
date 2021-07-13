import * as React from 'react';

function SvgBf(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#de0000" d="M640.003 479.578H.378V0h639.625z" />
                <path fill="#35a100" d="M639.628 480H.003V240.216h639.625z" />
                <path
                    fill="#fff300"
                    d="M254.612 276.188l-106.066-72.434 131.043.122 40.386-117.322 40.388 117.322 131.043-.087-106.085 72.398 40.59 117.27-105.954-72.573-105.955 72.556"
                />
            </g>
        </svg>
    );
}

export default SvgBf;
