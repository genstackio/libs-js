import * as React from 'react';

function SvgVn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="vn_svg__a">
                    <path fillOpacity={0.67} d="M-85.334 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#vn_svg__a)" transform="translate(80.001) scale(.9375)">
                <path fill="#ec0015" d="M-128 0h768v512h-768z" />
                <path
                    d="M349.59 381.05l-89.576-66.893-89.137 67.55 33.152-109.77-88.973-67.784 110.08-.945 34.142-109.44 34.873 109.19 110.08.144-88.517 68.423 33.884 109.53z"
                    fill="#ff0"
                />
            </g>
        </svg>
    );
}

export default SvgVn;
