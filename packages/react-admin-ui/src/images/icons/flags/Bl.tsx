import * as React from 'react';

function SvgBl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v479.997H0z" />
                <path fill="#00267f" d="M0 0h213.33v479.997H0z" />
                <path fill="#f31830" d="M426.663 0h213.33v479.997h-213.33z" />
            </g>
        </svg>
    );
}

export default SvgBl;
