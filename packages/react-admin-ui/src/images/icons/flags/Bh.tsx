import * as React from 'react';

function SvgBh(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="bh_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#bh_svg__a)">
                <path fill="#e10011" d="M-32.5 0h720v480h-720z" />
                <path
                    d="M114.25 479.77L-32.5 480V0l146.06.075 94.242 30.306-93.554 29.542 93.554 30.458-93.554 29.542 93.554 30.458-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54 93.554 30.46-93.554 29.54"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgBh;
