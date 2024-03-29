import * as React from 'react';

function SvgTo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#c10000" d="M0 0h640v480H0z" />
                <path fill="#fff" d="M0 0h249.954v200.321H0z" />
                <g fill="#c10000">
                    <path d="M102.854 31.24h39.84v139.54h-39.84z" />
                    <path d="M192.55 81.086v39.84H53.01v-39.84z" />
                </g>
            </g>
        </svg>
    );
}

export default SvgTo;
