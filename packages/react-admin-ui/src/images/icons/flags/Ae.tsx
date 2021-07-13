import * as React from 'react';

function SvgAe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#00732f" d="M0 0h640v160H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <path d="M0 320h640v160H0z" />
            <path fill="red" d="M0 0h220v480H0z" />
        </svg>
    );
}

export default SvgAe;
