import * as React from 'react';

function SvgIs(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="is_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" strokeWidth={0} clipPath="url(#is_svg__a)">
                <path fill="#003897" d="M0 0h666.67v480H0z" />
                <path
                    d="M0 186.67h186.67V0h106.67v186.67h373.33v106.67H293.34v186.67H186.67V293.34H0V186.67z"
                    fill="#fff"
                />
                <path
                    d="M0 213.33h213.33V0h53.333v213.33h400v53.333h-400v213.33H213.33v-213.33H0V213.33z"
                    fill="#d72828"
                />
            </g>
        </svg>
    );
}

export default SvgIs;
