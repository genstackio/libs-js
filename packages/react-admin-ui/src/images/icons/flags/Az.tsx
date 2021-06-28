import * as React from 'react';

function SvgAz(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#3f9c35" d="M.1 0h640v480H.1z" />
            <path fill="#ed2939" d="M.1 0h640v320H.1z" />
            <path fill="#00b9e4" d="M.1 0h640v160H.1z" />
            <circle cx={304} cy={240} r={72} fill="#fff" />
            <circle cx={320} cy={240} r={60} fill="#ed2939" />
            <path
                d="M384 200l7.654 21.522 20.63-9.806-9.806 20.63L424 240l-21.522 7.654 9.806 20.63-20.63-9.806L384 280l-7.654-21.522-20.63 9.806 9.806-20.63L344 240l21.522-7.654-9.806-20.63 20.63 9.806L384 200z"
                fill="#fff"
            />
        </svg>
    );
}

export default SvgAz;
