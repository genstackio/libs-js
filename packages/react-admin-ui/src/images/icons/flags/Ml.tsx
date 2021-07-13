import * as React from 'react';

function SvgMl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="red" d="M425.75 0H640v480H425.75z" />
                <path fill="#009a00" d="M0 0h212.88v480H0z" />
                <path fill="#ff0" d="M212.88 0h213.95v480H212.88z" />
            </g>
        </svg>
    );
}

export default SvgMl;
