import * as React from 'react';

function SvgGr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="gr_svg__a">
                    <path fillOpacity={0.67} d="M0 0h120v90H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#gr_svg__a)" transform="scale(5.33)" strokeWidth="1pt">
                <path fill="#0d5eaf" d="M0 0h135v10H0z" />
                <path fill="#fff" d="M0 10h135v10H0z" />
                <path fill="#0d5eaf" d="M0 20h135v10H0z" />
                <path fill="#fff" d="M0 30h135v10H0z" />
                <path fill="#0d5eaf" d="M0 40h135v10H0z" />
                <path fill="#fff" d="M0 50h135v10H0z" />
                <path fill="#0d5eaf" d="M0 60h135v10H0z" />
                <path fill="#fff" d="M0 70h135v10H0z" />
                <path fill="#0d5eaf" d="M0 80h135v10H0zM0 0h50v50H0z" />
                <g fill="#fff">
                    <path d="M20 0h10v50H20z" />
                    <path d="M0 20h50v10H0z" />
                </g>
            </g>
        </svg>
    );
}

export default SvgGr;