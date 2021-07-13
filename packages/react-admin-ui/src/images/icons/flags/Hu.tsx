import * as React from 'react';

function SvgHu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#fff" d="M640.006 479.994H0V0h640.006z" />
                <path fill="#388d00" d="M640.006 479.994H0V319.996h640.006z" />
                <path fill="#d43516" d="M640.006 160.127H0V.13h640.006z" />
            </g>
        </svg>
    );
}

export default SvgHu;
