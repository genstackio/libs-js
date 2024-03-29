import * as React from 'react';

function SvgLt(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <g fillRule="evenodd" transform="scale(.64143 .96773)" strokeWidth="1pt">
                <rect transform="scale(.93865 .69686)" rx={0} ry={0} width={1063} height={708.66} fill="#007308" />
                <rect
                    transform="scale(.93865 .69686)"
                    rx={0}
                    ry={0}
                    width={1063}
                    y={475.56}
                    height={236.22}
                    fill="#bf0000"
                />
                <path fill="#ffb300" d="M0 0h997.77v164.61H0z" />
            </g>
        </svg>
    );
}

export default SvgLt;
