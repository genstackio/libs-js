import * as React from 'react';

function SvgJm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path d="M0 0l320 240L0 480zm640 0L320 240l320 240z" />
                <path d="M0 0l320 240L640 0zm0 480l320-240 320 240z" fill="#090" />
                <path d="M640 0h-59.625L0 435.281V480h59.629L640.004 44.719z" fill="#fc0" />
                <path d="M0 0v44.722l580.375 435.28h59.629v-44.72L59.629 0z" fill="#fc0" />
            </g>
        </svg>
    );
}

export default SvgJm;