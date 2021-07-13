import * as React from 'react';

function SvgDk(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#c60c30" d="M0 0h640.1v480H0z" />
            <path fill="#fff" d="M205.714 0h68.57v480h-68.57z" />
            <path fill="#fff" d="M0 205.714h640.1v68.57H0z" />
        </svg>
    );
}

export default SvgDk;
