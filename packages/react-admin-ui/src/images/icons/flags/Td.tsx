import * as React from 'react';

function SvgTd(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#000067" d="M0 0h213.97v480H0z" />
                <path fill="red" d="M426.03 0H640v480H426.03z" />
                <path fill="#ff0" d="M213.97 0h212.06v480H213.97z" />
            </g>
        </svg>
    );
}

export default SvgTd;
