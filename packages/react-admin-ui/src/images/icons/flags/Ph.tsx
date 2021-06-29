import * as React from 'react';

function SvgPh(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#0038a8" d="M0 0h640v240H0z" />
            <path fill="#ce1126" d="M0 240h640v240H0z" />
            <path d="M415.692 240L0 480V0" fill="#fff" />
            <g transform="translate(149.333 240) scale(5.33333)" fill="#fcd116">
                <circle r={9} />
                <g id="ph_svg__d">
                    <g id="ph_svg__c">
                        <g id="ph_svg__b">
                            <path d="M-1 0l.062.062L0 0l-.938-.062z" transform="scale(19)" />
                            <path id="ph_svg__a" d="M-.884.116l.05.05L0 0z" transform="scale(19.2381)" />
                            <use height="100%" width="100%" xlinkHref="#ph_svg__a" transform="scale(1 -1)" />
                        </g>
                        <use height="100%" width="100%" xlinkHref="#ph_svg__b" transform="rotate(45)" />
                    </g>
                    <use height="100%" width="100%" xlinkHref="#ph_svg__c" transform="rotate(90)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#ph_svg__d" transform="scale(-1)" />
                <g transform="translate(-2.02)">
                    <g id="ph_svg__f" transform="translate(37.962)">
                        <path id="ph_svg__e" d="M5 0L1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z" />
                        <use height="100%" width="100%" xlinkHref="#ph_svg__e" transform="scale(1 -1)" />
                    </g>
                    <use height="100%" width="100%" xlinkHref="#ph_svg__f" transform="rotate(120)" />
                    <use height="100%" width="100%" xlinkHref="#ph_svg__f" transform="rotate(-120)" />
                </g>
            </g>
        </svg>
    );
}

export default SvgPh;
