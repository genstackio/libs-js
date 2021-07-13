import * as React from 'react';

function SvgVe(props: React.SVGProps<SVGSVGElement>) {
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
                <g id="ve_svg__d" transform="translate(0 -36)">
                    <g id="ve_svg__c">
                        <g id="ve_svg__b">
                            <path d="M0-5L-1.545-.245l2.853.927z" id="ve_svg__a" fill="#fff" />
                            <use xlinkHref="#ve_svg__a" transform="scale(-1 1)" width={180} height={120} />
                        </g>
                        <use xlinkHref="#ve_svg__b" transform="rotate(72)" width={180} height={120} />
                    </g>
                    <use xlinkHref="#ve_svg__b" transform="rotate(-72)" width={180} height={120} />
                    <use xlinkHref="#ve_svg__c" transform="rotate(144)" width={180} height={120} />
                </g>
            </defs>
            <path d="M0 0h640v480H0z" fill="#cf142b" />
            <path d="M0 0h640v320H0z" fill="#00247d" />
            <path d="M0 0h640v160H0z" fill="#fc0" />
            <g id="ve_svg__f" transform="matrix(4 0 0 4 320 336)">
                <g id="ve_svg__e">
                    <use height={120} width={180} transform="rotate(10)" xlinkHref="#ve_svg__d" />
                    <use height={120} width={180} transform="rotate(30)" xlinkHref="#ve_svg__d" />
                </g>
                <use height={120} width={180} transform="rotate(40)" xlinkHref="#ve_svg__e" />
            </g>
            <use height={120} width={180} transform="rotate(-80 320 336)" xlinkHref="#ve_svg__f" />
        </svg>
    );
}

export default SvgVe;
