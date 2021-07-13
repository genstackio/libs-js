import * as React from 'react';

function SvgAm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v160H0z" fill="red" />
            <path d="M0 160h640v160H0z" fill="#00f" />
            <path d="M0 320h640v160H0z" fill="orange" />
        </svg>
    );
}

export default SvgAm;
