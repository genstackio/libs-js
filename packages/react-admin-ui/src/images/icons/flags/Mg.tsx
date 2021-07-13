import * as React from 'react';

function SvgMg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g strokeWidth="1pt" fillRule="evenodd">
                <path fill="#ff3319" d="M213.33 0H640v240H213.33z" />
                <path fill="#00cc28" d="M213.33 240H640v240H213.33z" />
                <path fill="#fff" d="M0 0h213.33v480H0z" />
            </g>
        </svg>
    );
}

export default SvgMg;
