import * as React from 'react';

function SvgJo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="jo_svg__a">
                    <path fillOpacity={0.67} d="M-117.82 0h682.67v512h-682.67z" />
                </clipPath>
            </defs>
            <g clipPath="url(#jo_svg__a)" transform="translate(110.46) scale(.9375)">
                <g fillRule="evenodd" strokeWidth="1pt">
                    <path d="M-117.82 0H906.182v170.667H-117.82z" />
                    <path fill="#fff" d="M-117.82 170.667H906.182v170.667H-117.82z" />
                    <path fill="#090" d="M-117.82 341.334H906.182v170.667H-117.82z" />
                    <path d="M-117.82 512.001l512.001-256L-117.82 0v512.001z" fill="red" />
                    <path
                        fill="#fff"
                        d="M24.528 288.964l5.664-24.82H4.743l22.928-11.045-15.867-19.9 22.93 11.05 5.664-24.82 5.661 24.82 22.93-11.05-15.866 19.9 22.93 11.045H50.602l5.663 24.82-15.867-19.92z"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgJo;
