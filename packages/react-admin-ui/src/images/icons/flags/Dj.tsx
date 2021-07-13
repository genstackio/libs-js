import * as React from 'react';

function SvgDj(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="dj_svg__a">
                    <path fillOpacity={0.67} d="M-40 0h682.67v512H-40z" />
                </clipPath>
            </defs>
            <g clipPath="url(#dj_svg__a)" fillRule="evenodd" transform="translate(37.5) scale(.94)">
                <path fill="#0c0" d="M-40 0h768v512H-40z" />
                <path fill="#69f" d="M-40 0h768v256H-40z" />
                <path d="M-40 0l382.73 255.67L-40 511.01V0z" fill="#fffefe" />
                <path
                    d="M119.8 292.07l-30.82-22.18-30.67 22.4 11.407-36.41-30.613-22.48 37.874-.31 11.747-36.3 12 36.216 37.874.048-30.458 22.695 11.66 36.328z"
                    fill="red"
                />
            </g>
        </svg>
    );
}

export default SvgDj;
