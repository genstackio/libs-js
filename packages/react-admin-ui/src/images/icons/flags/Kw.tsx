import * as React from 'react';

function SvgKw(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="kw_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#kw_svg__a)" transform="scale(.9375)" strokeWidth="1pt">
                <path fill="#fff" d="M0 170.64h1024v170.68H0z" />
                <path fill="#f31830" d="M0 341.32h1024V512H0z" />
                <path fill="#00d941" d="M0 0h1024v170.68H0z" />
                <path d="M0 0v512l255.45-170.7.55-170.77L0 0z" />
            </g>
        </svg>
    );
}

export default SvgKw;
