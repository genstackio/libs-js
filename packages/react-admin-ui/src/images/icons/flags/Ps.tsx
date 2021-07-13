import * as React from 'react';

function SvgPs(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="ps_svg__a">
                    <path fillOpacity={0.67} d="M-118 0h682.67v512H-118z" />
                </clipPath>
            </defs>
            <g clipPath="url(#ps_svg__a)" transform="translate(110.63) scale(.9375)">
                <g fillRule="evenodd" strokeWidth="1pt">
                    <path d="M-246 0H778.002v170.667H-246z" />
                    <path fill="#fff" d="M-246 170.667H778.002v170.667H-246z" />
                    <path fill="#090" d="M-246 341.334H778.002v170.667H-246z" />
                    <path d="M-246 512.001l512.001-256L-246 0v512.001z" fill="red" />
                </g>
            </g>
        </svg>
    );
}

export default SvgPs;
