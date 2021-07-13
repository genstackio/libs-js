import * as React from 'react';

function SvgSl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#0000cd" d="M0 320.344h640V480H0z" />
                <path fill="#fff" d="M0 160.688h640v159.656H0z" />
                <path fill="#00cd00" d="M0 0h640v160.688H0z" />
            </g>
        </svg>
    );
}

export default SvgSl;
