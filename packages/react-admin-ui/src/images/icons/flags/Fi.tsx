import * as React from 'react';

function SvgFi(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path fill="#003580" d="M0 174.545h640v130.909H0z" />
            <path fill="#003580" d="M175.455 0h130.909v480H175.455z" />
        </svg>
    );
}

export default SvgFi;
