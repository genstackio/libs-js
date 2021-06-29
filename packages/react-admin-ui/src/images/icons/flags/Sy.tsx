import * as React from 'react';

function SvgSy(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect y={160} width={640} height={160} ry={0} rx={0} fill="#fff" fillRule="evenodd" />
            <rect y={320} width={640} height={160} ry={0} rx={0} fillRule="evenodd" />
            <path d="M0 0h640v160H0z" fill="red" fillRule="evenodd" />
            <path
                d="M201.9 281l-28.822-20.867-28.68 21.072 10.667-34.242-28.628-21.145 35.418-.295 10.985-34.138 11.221 34.06 35.418.045-28.481 21.344L201.9 281zm307.64 0l-28.822-20.867-28.68 21.072 10.667-34.242-28.628-21.145 35.418-.295 10.985-34.138 11.221 34.06 35.418.045-28.481 21.344L509.54 281z"
                fill="#090"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SvgSy;
