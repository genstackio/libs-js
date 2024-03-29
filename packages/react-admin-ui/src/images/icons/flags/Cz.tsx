import * as React from 'react';

function SvgCz(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="cz_svg__a">
                    <path fillOpacity={0.67} d="M-74 0h682.67v512H-74z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#cz_svg__a)" transform="translate(69.38) scale(.94)" strokeWidth="1pt">
                <path fill="#e80000" d="M-74 0h768v512H-74z" />
                <path fill="#fff" d="M-74 0h768v256H-74z" />
                <path d="M-74 0l382.73 255.67L-74 511.01V0z" fill="#00006f" />
            </g>
        </svg>
    );
}

export default SvgCz;
