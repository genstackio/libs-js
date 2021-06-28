import * as React from 'react';

function SvgEsCt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill="#fcdd09" d="M0 0h640v480H0z" />
            <path
                d="M0 90h810m0 120H0m0 120h810m0 120H0"
                stroke="#da121a"
                strokeWidth={60}
                transform="scale(.79012 .88889)"
            />
        </svg>
    );
}

export default SvgEsCt;
