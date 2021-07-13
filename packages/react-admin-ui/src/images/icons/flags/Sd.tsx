import * as React from 'react';

function SvgSd(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="sd_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#sd_svg__a)" transform="scale(.9375)" strokeWidth="1pt">
                <path d="M0 341.32h1024V512H0z" />
                <path fill="#fff" d="M0 170.64h1024v170.68H0z" />
                <path fill="red" d="M0 0h1024.8v170.68H0z" />
                <path d="M0 0v512l341.32-256L0 0z" fill="#009a00" />
            </g>
        </svg>
    );
}

export default SvgSd;
