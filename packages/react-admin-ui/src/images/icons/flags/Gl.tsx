import * as React from 'react';

function SvgGl(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v480H0z" fill="#fff" />
            <path
                d="M0 240h640v240H0zm80 0c.014 88.356 71.644 159.975 160 159.975S399.986 328.355 400 240c-.014-88.356-71.644-159.975-160-159.975S80.014 151.645 80 240"
                fill="#d00c33"
            />
        </svg>
    );
}

export default SvgGl;
