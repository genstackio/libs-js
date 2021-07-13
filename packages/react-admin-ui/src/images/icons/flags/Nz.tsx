import * as React from 'react';

function SvgNz(props: React.SVGProps<SVGSVGElement>) {
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
                <clipPath id="nz_svg__c">
                    <path d="M0 0h600v300H0z" />
                </clipPath>
                <clipPath id="nz_svg__d">
                    <path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" />
                </clipPath>
                <g id="nz_svg__b">
                    <g id="nz_svg__a">
                        <path transform="translate(0 -.325)" d="M0 0v.5L1 0z" />
                        <path transform="rotate(-36 .5 -.162)" d="M0 0v-.5L1 0z" />
                    </g>
                    <use transform="scale(-1 1)" xlinkHref="#nz_svg__a" />
                    <use transform="rotate(72 0 0)" xlinkHref="#nz_svg__a" />
                    <use transform="rotate(-72 0 0)" xlinkHref="#nz_svg__a" />
                    <use transform="scale(-1 1) rotate(72)" xlinkHref="#nz_svg__a" />
                </g>
            </defs>
            <path d="M.004 0h640v480h-640z" fill="#00247d" fillRule="evenodd" />
            <g transform="translate(-92.947 36.115) scale(.66825)">
                <use
                    fill="#fff"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="matrix(45.4 0 0 45.4 900 120)"
                />
                <use
                    fill="#cc142b"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="matrix(30 0 0 30 900 120)"
                />
            </g>
            <g transform="rotate(82 534.179 124.977) scale(.66825)">
                <use
                    fill="#fff"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="rotate(-82 519.022 -457.666) scale(40.4)"
                />
                <use
                    fill="#cc142b"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="rotate(-82 519.022 -457.666) scale(25)"
                />
            </g>
            <g transform="rotate(82 534.179 124.977) scale(.66825)">
                <use
                    fill="#fff"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="rotate(-82 668.57 -327.666) scale(45.4)"
                />
                <use
                    fill="#cc142b"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="rotate(-82 668.57 -327.666) scale(30)"
                />
            </g>
            <g transform="translate(-92.947 36.115) scale(.66825)">
                <use
                    fill="#fff"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="matrix(50.4 0 0 50.4 900 480)"
                />
                <use
                    fill="#cc142b"
                    height="100%"
                    width="100%"
                    xlinkHref="#nz_svg__b"
                    transform="matrix(35 0 0 35 900 480)"
                />
            </g>
            <path
                clipPath="url(#nz_svg__c)"
                d="M0 0l600 300M0 300L600 0"
                transform="matrix(.60681 0 0 .73139 .004 0)"
                stroke="#fff"
                strokeWidth={60}
            />
            <path
                clipPath="url(#nz_svg__d)"
                d="M0 0l600 300M0 300L600 0"
                transform="matrix(.60681 0 0 .73139 .004 0)"
                stroke="#cc142b"
                strokeWidth={40}
            />
            <path
                style={{
                    lineHeight: 'normal',
                    textIndent: 0,
                    textAlign: 'start',
                    textDecorationLine: 'none',
                    textDecorationStyle: 'solid',
                    textDecorationColor: '#000',
                    textTransform: 'none',
                    isolation: 'auto',
                    mixBlendMode: 'normal',
                }}
                clipPath="url(#nz_svg__c)"
                d="M151.707-.002v79.37H.004v60.68h151.703v79.37h60.682v-79.37h151.703v-60.68H212.389V-.003z"
                color="#000"
                fontWeight={400}
                fontFamily="sans-serif"
                overflow="visible"
                fill="#fff"
            />
            <path
                style={{
                    lineHeight: 'normal',
                    textIndent: 0,
                    textAlign: 'start',
                    textDecorationLine: 'none',
                    textDecorationStyle: 'solid',
                    textDecorationColor: '#000',
                    textTransform: 'none',
                    isolation: 'auto',
                    mixBlendMode: 'normal',
                }}
                d="M163.844.002v91.502H.004v36.408h163.84v91.502h36.408v-91.502h163.84V91.504h-163.84V.002z"
                color="#000"
                fontWeight={400}
                fontFamily="sans-serif"
                overflow="visible"
                fill="#cc142b"
            />
        </svg>
    );
}

export default SvgNz;
