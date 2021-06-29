import * as React from 'react';

function SvgPw(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="pw_svg__a">
                    <path fillOpacity={0.67} d="M-70.28 0h640v480h-640z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#pw_svg__a)" transform="translate(70.28)" strokeWidth="1pt">
                <path fill="#4aadd6" d="M-173.44 0h846.32v480h-846.32z" />
                <path
                    d="M335.633 232.117a135.876 130.111 0 11-271.752 0 135.876 130.111 0 11271.752 0z"
                    fill="#ffde00"
                />
            </g>
        </svg>
    );
}

export default SvgPw;
