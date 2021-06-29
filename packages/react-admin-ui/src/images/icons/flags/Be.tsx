import * as React from 'react';

function SvgBe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path d="M0 0h213.335v479.997H0z" />
                <path fill="#ffd90c" d="M213.335 0H426.67v479.997H213.335z" />
                <path fill="#f31830" d="M426.67 0h213.335v479.997H426.67z" />
            </g>
        </svg>
    );
}

export default SvgBe;
