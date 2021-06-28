import * as React from 'react';

function SvgBq(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 0h640v480H0z" fill="#21468b" />
            <path d="M0 0h640v320H0z" fill="#fff" />
            <path d="M0 0h640v160H0z" fill="#ae1c28" />
        </svg>
    );
}

export default SvgBq;
