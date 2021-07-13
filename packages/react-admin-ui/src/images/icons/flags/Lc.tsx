import * as React from 'react';

function SvgLc(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd">
                <path fill="#65cfff" d="M0 0h640v480H0z" />
                <path d="M318.9 41.991l162.66 395.3-322.6.91L318.9 41.991z" fill="#fff" />
                <path d="M319.09 96.516l140.67 339.99-278.99.78 138.32-340.77z" />
                <path d="M318.9 240.1l162.66 197.64-322.6.46L318.9 240.1z" fill="#ffce00" />
            </g>
        </svg>
    );
}

export default SvgLc;
