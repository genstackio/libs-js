import * as React from 'react';

function SvgId(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#e70011" d="M0 0h639.958v248.947H0z" />
                <path fill="#fff" d="M0 240h639.958v240H0z" />
            </g>
        </svg>
    );
}

export default SvgId;
