import * as React from 'react';

function SvgZa(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <defs>
                <clipPath id="za_svg__a">
                    <path fillOpacity={0.67} d="M-71.873-.012h682.68v512.01h-682.68z" />
                </clipPath>
            </defs>
            <g clipPath="url(#za_svg__a)" transform="translate(67.379 .011) scale(.93748)">
                <g fillRule="evenodd" strokeWidth="1pt">
                    <path d="M-71.878 407.837V104.428l225.832 151.627-225.832 151.793z" />
                    <path d="M82.217 512.121l253.538-170.644h360.372v170.644H82.217z" fill="#00c" />
                    <path d="M65.917.062l630.19.013v170.672H335.735S69.295-1.626 65.917.062z" fill="red" />
                    <path
                        d="M-71.878 64.075v40.329L153.954 256.03-71.878 407.823v40.327l284.44-192.12-284.44-191.955z"
                        fill="#fc0"
                    />
                    <path
                        d="M-71.878 64.075V.062h94.891l301.313 203.88h371.778v104.261H324.326L23.013 512.053h-94.89V448.15l284.439-192.12-284.44-191.955z"
                        fill="#093"
                    />
                    <path
                        d="M23.013.062h59.194l253.538 170.673h360.372v33.207H324.339L23.025.062zm0 512.059h59.194l253.538-170.644h360.372v-33.206H324.339L23.025 512.12z"
                        fill="#fff"
                    />
                </g>
            </g>
        </svg>
    );
}

export default SvgZa;
