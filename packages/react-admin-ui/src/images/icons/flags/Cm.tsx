import * as React from 'react';

function SvgCm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path fill="#007a5e" d="M0 0h213.333v480H0z" />
            <path fill="#ce1126" d="M213.333 0h213.333v480H213.333z" />
            <path fill="#fcd116" d="M426.667 0H640v480H426.667z" />
            <g transform="translate(320 240) scale(7.1111)" fill="#fcd116">
                <g id="cm_svg__b">
                    <path id="cm_svg__a" d="M0-8L-2.472-.392 1.332.845z" />
                    <use height="100%" width="100%" xlinkHref="#cm_svg__a" transform="scale(-1 1)" />
                </g>
                <use height="100%" width="100%" xlinkHref="#cm_svg__b" transform="rotate(72)" />
                <use height="100%" width="100%" xlinkHref="#cm_svg__b" transform="rotate(144)" />
                <use height="100%" width="100%" xlinkHref="#cm_svg__b" transform="rotate(-144)" />
                <use height="100%" width="100%" xlinkHref="#cm_svg__b" transform="rotate(-72)" />
            </g>
        </svg>
    );
}

export default SvgCm;
