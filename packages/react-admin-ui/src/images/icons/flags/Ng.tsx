import * as React from 'react';

function SvgNg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h639.98v479.998H0z" />
                <path fill="#008753" d="M426.654 0H639.98v479.998H426.654zM0 0h213.327v479.998H0z" />
            </g>
        </svg>
    );
}

export default SvgNg;
