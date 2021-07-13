import * as React from 'react';

function SvgTn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="tn_svg__a">
                    <path fillOpacity={0.67} d="M-85.333 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#tn_svg__a)" transform="translate(80) scale(.9375)">
                <path fill="#e70013" d="M-128 0h768v512h-768z" />
                <path
                    d="M385.808 255.773c0 71.316-57.813 129.129-129.129 129.129-71.317 0-129.13-57.814-129.13-129.13s57.814-129.129 129.13-129.129c71.317 0 129.13 57.814 129.13 129.13z"
                    fill="#fff"
                />
                <path
                    d="M256.68 341.41c-47.27 0-85.635-38.364-85.635-85.635s38.364-85.636 85.635-85.636c11.818 0 25.27 2.719 34.407 9.43-62.63 2.357-78.472 55.477-78.472 76.885s10.128 69.154 78.471 76.205c-7.777 5.013-22.588 8.75-34.406 8.75z"
                    fill="#e70013"
                />
                <path
                    fill="#e70013"
                    d="M332.11 291.785l-38.89-14.18-25.72 32.417 1.477-41.356-38.787-14.45 39.798-11.373 1.744-41.356 23.12 34.338 39.87-11.116-25.504 32.594z"
                />
            </g>
        </svg>
    );
}

export default SvgTn;
