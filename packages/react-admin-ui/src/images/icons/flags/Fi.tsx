import * as React from 'react';

function SvgFi(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path fill="#003580" d="M0 174.545h640v130.909H0z" />
            <path fill="#003580" d="M175.455 0h130.909v480H175.455z" />
        </svg>
    );
}

export default SvgFi;
