import * as React from 'react';

function SvgQa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#8d1b3d" d="M0 0h640v480H0z" />
            <path
                d="M0 0v480h158.4l97.745-26.666-97.745-26.668L256.145 400 158.4 373.334l97.745-26.668L158.4 320l97.745-26.666-97.745-26.668L256.145 240 158.4 213.334l97.745-26.668L158.4 160l97.745-26.666-97.745-26.668L256.145 80 158.4 53.334l97.745-26.668L158.4 0H0z"
                fill="#fff"
            />
        </svg>
    );
}

export default SvgQa;
