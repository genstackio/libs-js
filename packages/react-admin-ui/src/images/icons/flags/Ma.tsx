import * as React from 'react';

function SvgMa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#c1272d" d="M640 0H0v480h640z" />
            <path
                d="M320 179.452l-35.574 109.496 93.12-67.647H262.453l93.122 67.648z"
                fill="none"
                stroke="#006233"
                strokeWidth={11.704}
            />
        </svg>
    );
}

export default SvgMa;
