import * as React from 'react';

function SvgMk(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path fill="#d20000" d="M0 0h640v480H0z" />
            <path
                d="M0 0h96l224 231.43L544 0h96L0 480h96l224-231.43L544 480h96zm640 192v96L0 192v96zM280 0l40 205.714L360 0zm0 480l40-205.714L360 480z"
                fill="#ffe600"
            />
            <circle r={77.143} cy={240} cx={320} fill="#ffe600" stroke="#d20000" strokeWidth={17.143} />
        </svg>
    );
}

export default SvgMk;
