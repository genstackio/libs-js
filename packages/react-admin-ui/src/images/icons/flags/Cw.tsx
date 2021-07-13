import * as React from 'react';

function SvgCw(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="cw_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
                <path id="cw_svg__b" d="M0-1l.225.69H.95L.364.12l.225.69L0 .383-.588.81l.225-.692L-.95-.31h.725z" />
            </defs>
            <g clipPath="url(#cw_svg__a)" transform="scale(.94)">
                <path fill="#002b7f" d="M0 0h768v512H0z" />
                <path fill="#f9e814" d="M0 320h768v64H0z" />
                <use
                    xlinkHref="#cw_svg__b"
                    transform="scale(42.67)"
                    height={9000}
                    width={13500}
                    y={2}
                    x={2}
                    fill="#fff"
                />
                <use
                    xlinkHref="#cw_svg__b"
                    transform="scale(56.9)"
                    height={9000}
                    width={13500}
                    y={3}
                    x={3}
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgCw;
