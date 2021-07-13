import * as React from 'react';

function SvgTt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path
                d="M463.663 480L.05 1.003 0 479.747l463.663.253zM176.337 0L639.95 478.997 640 .253 176.337 0z"
                fillRule="evenodd"
                fill="#e00000"
            />
            <path d="M27.74.23h118.597l468.176 479.315h-122.35L27.738.229z" fillRule="evenodd" />
        </svg>
    );
}

export default SvgTt;
