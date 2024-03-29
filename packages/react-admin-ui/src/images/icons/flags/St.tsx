import * as React from 'react';

function SvgSt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#12ad2b" d="M0 0h640v480H0z" />
            <path fill="#ffce00" d="M0 137.143h640v205.714H0z" />
            <path d="M0 0v480l240-240" fill="#d21034" />
            <g id="st_svg__c" transform="translate(351.595 240) scale(.34286)">
                <g id="st_svg__b">
                    <path id="st_svg__a" d="M0-200V0h100" transform="rotate(18 0 -200)" />
                    <use height="100%" width="100%" xlinkHref="#st_svg__a" transform="scale(-1 1)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#st_svg__b" transform="rotate(72)" />
                <use height="100%" width="100%" xlinkHref="#st_svg__b" transform="rotate(144)" />
                <use height="100%" width="100%" xlinkHref="#st_svg__b" transform="rotate(-144)" />
                <use height="100%" width="100%" xlinkHref="#st_svg__b" transform="rotate(-72)" />
            </g>
            <use height="100%" width="100%" xlinkHref="#st_svg__c" x={700} transform="translate(-523.19)" />
        </svg>
    );
}

export default SvgSt;
