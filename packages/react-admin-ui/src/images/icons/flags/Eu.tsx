import * as React from 'react';

function SvgEu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <defs>
                <g id="eu_svg__d">
                    <g id="eu_svg__b">
                        <path d="M0-1l-.31.95.477.156z" id="eu_svg__a" />
                        <use transform="scale(-1 1)" xlinkHref="#eu_svg__a" />
                    </g>
                    <g id="eu_svg__c">
                        <use transform="rotate(72)" xlinkHref="#eu_svg__b" />
                        <use transform="rotate(144)" xlinkHref="#eu_svg__b" />
                    </g>
                    <use transform="scale(-1 1)" xlinkHref="#eu_svg__c" />
                </g>
            </defs>
            <path fill="#039" d="M0 0h640v480H0z" />
            <g transform="translate(320 242.263) scale(23.7037)" fill="#fc0">
                <use height="100%" width="100%" xlinkHref="#eu_svg__d" y={-6} />
                <use height="100%" width="100%" xlinkHref="#eu_svg__d" y={6} />
                <g id="eu_svg__e">
                    <use height="100%" width="100%" xlinkHref="#eu_svg__d" x={-6} />
                    <use height="100%" width="100%" xlinkHref="#eu_svg__d" transform="rotate(-144 -2.344 -2.11)" />
                    <use height="100%" width="100%" xlinkHref="#eu_svg__d" transform="rotate(144 -2.11 -2.344)" />
                    <use height="100%" width="100%" xlinkHref="#eu_svg__d" transform="rotate(72 -4.663 -2.076)" />
                    <use height="100%" width="100%" xlinkHref="#eu_svg__d" transform="rotate(72 -5.076 .534)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#eu_svg__e" transform="scale(-1 1)" />
            </g>
        </svg>
    );
}

export default SvgEu;
