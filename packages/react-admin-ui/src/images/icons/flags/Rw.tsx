import * as React from 'react';

function SvgRw(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#20603d" d="M0 0h640v480H0z" />
            <path fill="#fad201" d="M0 0h640v360H0z" />
            <path fill="#00a1de" d="M0 0h640v240H0z" />
            <g transform="translate(511 125.4) scale(.66667)">
                <g id="rw_svg__b">
                    <path
                        id="rw_svg__a"
                        d="M116.1 0L35.692 4.7l76.452 25.35L33.26 13.776l67.286 44.273L28.56 21.915l53.535 60.18-60.18-53.534 36.135 71.986L13.777 33.26l16.272 78.884L4.7 35.692 0 116.1-1-1z"
                        fill="#e5be01"
                    />
                    <use height="100%" width="100%" xlinkHref="#rw_svg__a" transform="scale(1 -1)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#rw_svg__b" transform="scale(-1 1)" />
                <circle r={34.3} fill="#e5be01" stroke="#00a1de" strokeWidth={3.4} />
            </g>
        </svg>
    );
}

export default SvgRw;
