import * as React from 'react';

function SvgKn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="kn_svg__a">
                    <path fillOpacity={0.67} d="M-80.109 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#kn_svg__a)" transform="translate(75.102) scale(.9375)">
                <path fill="#ffe900" d="M-107.85.239H629.8v511.29h-737.65z" />
                <path d="M-108.24.239l.86 368.58L466.6-.001l-574.84.238z" fill="#35a100" />
                <path d="M630.69 511.53l-1.347-383.25-578.98 383.54 580.33-.283z" fill="#c70000" />
                <path d="M-107.87 396.61l.49 115.39 125.25-.16L629.63 101.7l-.69-100.32L505.18.239l-613.05 396.37z" />
                <path
                    fill="#fff"
                    d="M380.455 156.62l-9.913-42.245 33.354 27.075 38.014-24.636-17.437 41.311 33.404 27.021-44.132-1.541-17.37 41.333-9.835-42.265-44.138-1.48zM105.21 335.53l-9.913-42.245 33.354 27.075 38.014-24.636-17.437 41.311 33.404 27.021-44.132-1.541-17.37 41.333-9.835-42.265-44.138-1.48z"
                />
            </g>
        </svg>
    );
}

export default SvgKn;
