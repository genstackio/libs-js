import * as React from 'react';

function SvgPr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="pr_svg__a">
                    <path fillOpacity={0.67} d="M-37.298 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#pr_svg__a)" transform="translate(34.967) scale(.9375)">
                <path fill="#ed0000" d="M-37.298 0h768v512h-768z" />
                <path fill="#fff" d="M-37.298 102.4h768v102.4h-768zm0 204.8h768v102.4h-768z" />
                <path d="M-37.298 0l440.69 255.67-440.69 255.34V0z" fill="#0050f0" />
                <path
                    d="M156.45 325.47l-47.447-35.432-47.214 35.78 17.56-58.144-47.128-35.904 58.305-.5 18.084-57.97 18.472 57.835 58.305.077-46.886 36.243 17.947 58.016z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgPr;
