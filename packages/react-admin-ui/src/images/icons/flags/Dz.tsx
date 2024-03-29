import * as React from 'react';

function SvgDz(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#fff" d="M320 0h320v480H320z" />
            <path fill="#006233" d="M0 0h320v480H0z" />
            <path
                d="M424 180a120 120 0 100 120 96 96 0 110-120m4 60l-108-35.2 67.2 92V183.2l-67.2 92z"
                fill="#d21034"
            />
        </svg>
    );
}

export default SvgDz;
