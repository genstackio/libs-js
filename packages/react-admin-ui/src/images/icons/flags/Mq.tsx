import * as React from 'react';

function SvgMq(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g strokeWidth="1pt" fillRule="evenodd">
                <path fill="#fff" d="M0 0h640v480H0z" />
                <path fill="#00267f" d="M0 0h213.33v480H0z" />
                <path fill="#f31830" d="M426.67 0H640v480H426.67z" />
            </g>
        </svg>
    );
}

export default SvgMq;
