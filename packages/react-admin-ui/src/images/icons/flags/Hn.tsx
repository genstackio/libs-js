import * as React from 'react';

function SvgHn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v480H0z" fill="#0073cf" />
            <path d="M0 160h640v160H0z" fill="#fff" />
            <g id="hn_svg__c" transform="translate(320 240) scale(26.66665)" fill="#0073cf">
                <g id="hn_svg__b">
                    <path id="hn_svg__a" d="M-.31-.05l.477.156L0-1z" />
                    <use height="100%" width="100%" xlinkHref="#hn_svg__a" transform="scale(-1 1)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#hn_svg__b" transform="rotate(72)" />
                <use height="100%" width="100%" xlinkHref="#hn_svg__b" transform="rotate(-72)" />
                <use height="100%" width="100%" xlinkHref="#hn_svg__b" transform="rotate(144)" />
                <use height="100%" width="100%" xlinkHref="#hn_svg__b" transform="rotate(-144)" />
            </g>
            <use height="100%" width="100%" xlinkHref="#hn_svg__c" transform="translate(133.333 -42.666)" />
            <use height="100%" width="100%" xlinkHref="#hn_svg__c" transform="translate(133.333 37.333)" />
            <use height="100%" width="100%" xlinkHref="#hn_svg__c" transform="translate(-133.333 -42.666)" />
            <use height="100%" width="100%" xlinkHref="#hn_svg__c" transform="translate(-133.333 37.333)" />
        </svg>
    );
}

export default SvgHn;
