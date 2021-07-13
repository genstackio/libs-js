import * as React from 'react';

function SvgSo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="so_svg__a">
                    <path fillOpacity={0.67} d="M-85.334 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g clipPath="url(#so_svg__a)" fillRule="evenodd" transform="translate(80.001) scale(.9375)">
                <path fill="#40a6ff" d="M-128 0h768v512h-768z" />
                <path
                    d="M336.48 381.19l-82.505-53.476-82.101 54.001 30.535-87.754-81.95-54.188 101.39-.756 31.447-87.488 32.121 87.286 101.39.116-81.53 54.699 31.209 87.56z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgSo;
