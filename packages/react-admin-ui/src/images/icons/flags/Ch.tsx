import * as React from 'react';

function SvgCh(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#d52b1e" d="M0 0h640v480H0z" />
                <g fill="#fff">
                    <path d="M170 194.997h299.996v89.997H170z" />
                    <path d="M275 89.997h89.996v299.996H275z" />
                </g>
            </g>
        </svg>
    );
}

export default SvgCh;
