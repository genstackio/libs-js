import * as React from 'react';

function SvgJp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="jp_svg__a">
                    <path fillOpacity={0.67} d="M-88.001 32h640v480h-640z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#jp_svg__a)" transform="translate(88.001 -32)" strokeWidth="1pt">
                <path fill="#fff" d="M-128 32h720v480h-720z" />
                <circle
                    transform="translate(-168.44 8.618) scale(.76554)"
                    cy={344.05}
                    cx={523.08}
                    fill="#d30000"
                    r={194.93}
                />
            </g>
        </svg>
    );
}

export default SvgJp;
