import * as React from 'react';

function SvgCr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#0000b4" d="M0 0h640v480H0z" />
                <path fill="#fff" d="M0 75.428h640v322.285H0z" />
                <path fill="#d90000" d="M0 157.716h640V315.43H0z" />
            </g>
        </svg>
    );
}

export default SvgCr;
