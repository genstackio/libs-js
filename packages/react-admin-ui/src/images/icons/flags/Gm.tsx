import * as React from 'react';

function SvgGm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="gm_svg__a">
                    <path fillOpacity={0.67} d="M0-48h640v480H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#gm_svg__a)" transform="translate(0 48)" strokeWidth="1pt">
                <path fill="red" d="M0-128h640V85.33H0z" />
                <path fill="#fff" d="M0 85.333h640v35.556H0z" />
                <path fill="#009" d="M0 120.89h640v142.22H0z" />
                <path fill="#fff" d="M0 263.11h640v35.556H0z" />
                <path fill="#090" d="M0 298.67h640V512H0z" />
            </g>
        </svg>
    );
}

export default SvgGm;
