import * as React from 'react';

function SvgVc(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#f4f100" d="M0 0h640v480H0z" />
                <path fill="#199a00" d="M490 0h150v480H490z" />
                <path fill="#0058aa" d="M0 0h150v480H0z" />
                <path
                    d="M259.26 129.95l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046zm121.28 0l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046zm-61.26 97.39l-46.376 71.391 44.748 74.391 43.82-73.735-42.192-72.046z"
                    fill="#199a00"
                />
            </g>
        </svg>
    );
}

export default SvgVc;
