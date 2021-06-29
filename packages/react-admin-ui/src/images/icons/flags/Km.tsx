import * as React from 'react';

function SvgKm(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="km_svg__a">
                    <path fillOpacity={0.67} d="M0 0h682.67v512H0z" />
                </clipPath>
            </defs>
            <g clipPath="url(#km_svg__a)" fillRule="evenodd" transform="scale(.9375)">
                <path fill="#ff0" d="M0 0h768.77v128H0z" />
                <path fill="#fff" d="M0 128h768.77v128H0z" />
                <path fill="#be0027" d="M0 256h768.77v128H0z" />
                <path fill="#3b5aa3" d="M0 384h768.77v128H0z" />
                <path d="M0 0v512l381.86-255.28L0 0z" fill="#239e46" />
                <path
                    d="M157.21 141.43C72.113 137.12 33.34 204.9 33.43 257.3c-.194 61.97 58.529 113.08 112.81 109.99-29.27-13.84-65.008-52.66-65.337-110.25-.3-52.18 29.497-97.55 76.307-115.61z"
                    fill="#fff"
                />
                <path
                    fill="#fff"
                    d="M155.927 197.058l-11.992-9.385-14.539 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.238 4.195 14.649 14.452 4.846-12.644 8.524zm-.255 52.063l-11.993-9.385-14.538 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.238 4.194 14.649 14.453 4.846-12.645 8.524zm.255 52.577l-11.992-9.385-14.539 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.239 4.195 14.65 14.452 4.846-12.644 8.524zm-.255 53.08l-11.993-9.385-14.538 4.576 5.215-14.317-8.831-12.41 15.227.528 9.065-12.239 4.194 14.65 14.453 4.846-12.645 8.524z"
                />
            </g>
        </svg>
    );
}

export default SvgKm;