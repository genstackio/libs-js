import * as React from 'react';

function SvgSr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#377e3f" d="M.1 0h640v480H.1z" />
            <path fill="#fff" d="M.1 96h640v288H.1z" />
            <path fill="#b40a2d" d="M.1 144h640v192H.1z" />
            <path d="M320 153.167l56.427 173.666-147.73-107.33h182.605l-147.73 107.33z" fill="#ecc81d" />
        </svg>
    );
}

export default SvgSr;
