import * as React from 'react';

function SvgYe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v472.79H0z" />
                <path fill="#f10600" d="M0 0h640v157.374H0z" />
                <path d="M0 322.624h640v157.374H0z" />
            </g>
        </svg>
    );
}

export default SvgYe;
