import * as React from 'react';

function SvgSc(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="sc_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#sc_svg__a)" transform="scale(.9375)" strokeWidth="1pt">
                <path fill="red" d="M0 0h992.13v512H0z" />
                <path d="M0 512l992.12-170.67V512H0z" fill="#090" />
                <path d="M0 512l992.12-341.33v170.67L0 512z" fill="#fff" />
                <path d="M0 512V0h330.71L0 512z" fill="#009" />
                <path d="M0 512L330.71 0h330.71L0 512z" fill="#ff0" />
            </g>
        </svg>
    );
}

export default SvgSc;
