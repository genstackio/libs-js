import * as React from 'react';

function SvgGn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="red" d="M0 0h213.333v480H0z" />
                <path fill="#ff0" d="M213.333 0h213.333v480H213.333z" />
                <path fill="#090" d="M426.666 0H640v480H426.665z" />
            </g>
        </svg>
    );
}

export default SvgGn;
