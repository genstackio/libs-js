import * as React from 'react';

function SvgLa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="la_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#la_svg__a)">
                <path fill="#ce1126" d="M-40 0h720v480H-40z" />
                <path fill="#002868" d="M-40 119.26h720v241.48H-40z" />
                <path d="M423.42 239.998a103.419 103.419 0 11-206.838 0 103.419 103.419 0 11206.837 0z" fill="#fff" />
            </g>
        </svg>
    );
}

export default SvgLa;
