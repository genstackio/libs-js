import * as React from 'react';

function SvgLr(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="lr_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#lr_svg__a)" fillRule="evenodd" transform="scale(.9375)">
                <path fill="#fff" d="M0 .084h767.87v511.92H0z" />
                <path fill="#006" d="M0 0h232.74v232.75H0z" />
                <path fill="#c00" d="M0 464.87h767.89v47.127H0z" />
                <path
                    fill="#c00"
                    d="M0 465.43h767.89v46.574H0zm0-92.91h767.89v46.21H0zm0-93.26h765.96v46.7H0zM232.67.055h535.17v46.494H232.67zm0 186.005h535.17v46.796H232.67zm0-92.699h535.17v46.494H232.67z"
                />
                <path
                    d="M166.35 177.47l-50.71-30.98-50.465 31.29 18.769-50.85-50.373-31.394 62.321-.438 19.328-50.691 19.744 50.574 62.321.067-50.115 31.693 19.184 50.732z"
                    fill="#fff"
                />
            </g>
        </svg>
    );
}

export default SvgLr;
