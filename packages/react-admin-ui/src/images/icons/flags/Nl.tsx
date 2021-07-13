import * as React from 'react';

function SvgNl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt" transform="scale(1.25 .9375)">
                <rect rx={0} ry={0} height={509.76} width={512} fill="#fff" />
                <rect rx={0} ry={0} height={169.92} width={512} y={342.08} fill="#21468b" />
                <path fill="#ae1c28" d="M0 0h512v169.92H0z" />
            </g>
        </svg>
    );
}

export default SvgNl;
