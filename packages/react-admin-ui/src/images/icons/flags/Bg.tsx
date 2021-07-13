import * as React from 'react';

function SvgBg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#d62612" d="M0 319.997h640V480H0z" />
                <path fill="#fff" d="M0 0h640v160.003H0z" />
                <path fill="#00966e" d="M0 160.003h640v160.003H0z" />
            </g>
        </svg>
    );
}

export default SvgBg;
