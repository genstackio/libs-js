import * as React from 'react';

function SvgIt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="#fff" d="M0 0h640v479.997H0z" />
                <path fill="#009246" d="M0 0h213.331v479.997H0z" />
                <path fill="#ce2b37" d="M426.663 0h213.331v479.997H426.663z" />
            </g>
        </svg>
    );
}

export default SvgIt;
