import * as React from 'react';

function SvgFo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="fo_svg__a">
                    <path fillOpacity={0.67} d="M-78.015 32h640v480h-640z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#fo_svg__a)" transform="translate(78.02 -32)" strokeWidth={0}>
                <path fill="#fff" d="M-78.015 32h663.91v480h-663.91z" />
                <path
                    d="M-76.033 218.67h185.9V32h106.23v186.67h371.79v106.67h-371.79v186.67h-106.23V325.34h-185.9V218.67z"
                    fill="#003897"
                />
                <path
                    d="M-76.033 245.33h212.45V32h53.113v213.33h398.35v53.333H189.53v213.33h-53.113v-213.33h-212.45V245.33z"
                    fill="#d72828"
                />
            </g>
        </svg>
    );
}

export default SvgFo;
