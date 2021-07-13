import * as React from 'react';

function SvgUz(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#1eb53a" d="M0 320h640v160H0z" />
            <path fill="#0099b5" d="M0 0h640v160H0z" />
            <path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
            <path fill="#fff" d="M0 163.2h640v153.6H0z" />
            <circle cx={134.4} cy={76.8} r={57.6} fill="#fff" />
            <circle cx={153.6} cy={76.8} r={57.6} fill="#0099b5" />
            <g transform="matrix(1.92 0 0 1.92 261.12 122.88)" fill="#fff">
                <g id="uz_svg__e">
                    <g id="uz_svg__d">
                        <g id="uz_svg__c">
                            <g id="uz_svg__b">
                                <path id="uz_svg__a" d="M0-6L-1.854-.294 1 .633" />
                                <use height="100%" width="100%" xlinkHref="#uz_svg__a" transform="scale(-1 1)" />
                            </g>
                            <use height="100%" width="100%" xlinkHref="#uz_svg__b" transform="rotate(72)" />
                        </g>
                        <use height="100%" width="100%" xlinkHref="#uz_svg__b" transform="rotate(-72)" />
                        <use height="100%" width="100%" xlinkHref="#uz_svg__c" transform="rotate(144)" />
                    </g>
                    <use height="100%" width="100%" xlinkHref="#uz_svg__d" y={-24} />
                    <use height="100%" width="100%" xlinkHref="#uz_svg__d" y={-48} />
                </g>
                <use height="100%" width="100%" xlinkHref="#uz_svg__e" x={24} />
                <use height="100%" width="100%" xlinkHref="#uz_svg__e" x={48} />
                <use height="100%" width="100%" xlinkHref="#uz_svg__d" x={-48} />
                <use height="100%" width="100%" xlinkHref="#uz_svg__d" x={-24} />
                <use height="100%" width="100%" xlinkHref="#uz_svg__d" x={-24} y={-24} />
            </g>
        </svg>
    );
}

export default SvgUz;
