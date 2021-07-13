import * as React from 'react';

function SvgMc(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#f31830" d="M0 0h640v240H0z" />
                <path fill="#fff" d="M0 240h640v240H0z" />
            </g>
        </svg>
    );
}

export default SvgMc;
