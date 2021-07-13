import * as React from 'react';

function SvgTh(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#001b9a" d="M0 162.544h640v160.003H0z" />
                <path fill="#e70000" d="M0 .042h640v82.5H0zm0 399.961h640v80H0z" />
            </g>
        </svg>
    );
}

export default SvgTh;
