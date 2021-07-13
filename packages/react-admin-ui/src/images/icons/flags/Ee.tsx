import * as React from 'react';

function SvgEe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <rect rx={0} ry={0} height={477.9} width={640} />
                <rect rx={0} ry={0} height={159.3} width={640} y={320.7} fill="#fff" />
                <path fill="#1291ff" d="M0 0h640v159.3H0z" />
            </g>
        </svg>
    );
}

export default SvgEe;
