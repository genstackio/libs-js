import * as React from 'react';

function SvgKe(props: React.SVGProps<SVGSVGElement>) {
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
                <path
                    strokeMiterlimit={10}
                    d="M-28.58 47.5l1.733 1 46.713-80.91c2.732-.73 4.232-3.33 5.732-5.927 1-1.732 5-8.66 6.734-17.663-6.93 6.003-10.93 12.93-11.93 14.663-1.5 2.598-3 5.196-2.268 7.928z"
                    id="ke_svg__a"
                />
            </defs>
            <path d="M0 0h640v480H0z" fill="#fff" />
            <path d="M0 0h640v144H0z" />
            <path d="M0 336h640v144H0z" fill="#060" />
            <g id="ke_svg__b" transform="matrix(3 0 0 3 320 240)">
                <use height="100%" width="100%" xlinkHref="#ke_svg__a" stroke="#000" />
                <use height="100%" width="100%" xlinkHref="#ke_svg__a" fill="#fff" />
            </g>
            <use height="100%" width="100%" xlinkHref="#ke_svg__b" transform="matrix(-1 0 0 1 640 0)" />
            <path
                d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.227v144H263c9 24 39 72 57 72s48-48 57-72h263.5V168z"
                fill="#b00"
            />
            <path id="ke_svg__c" d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72" />
            <use height="100%" width="100%" xlinkHref="#ke_svg__c" transform="matrix(-1 0 0 1 640 0)" />
            <g transform="matrix(3 0 0 3 320 240)" fill="#fff">
                <ellipse rx={4} ry={6} />
                <path id="ke_svg__d" d="M1 5.85s4 8 4 21-4 21-4 21z" />
                <use height="100%" width="100%" xlinkHref="#ke_svg__d" transform="scale(-1)" />
                <use height="100%" width="100%" xlinkHref="#ke_svg__d" transform="scale(-1 1)" />
                <use height="100%" width="100%" xlinkHref="#ke_svg__d" transform="scale(1 -1)" />
            </g>
        </svg>
    );
}

export default SvgKe;
