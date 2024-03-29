import * as React from 'react';

function SvgDe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#ffce00" d="M0 320h640v160.002H0z" />
            <path d="M0 0h640v160H0z" />
            <path fill="#d00" d="M0 160h640v160H0z" />
        </svg>
    );
}

export default SvgDe;
