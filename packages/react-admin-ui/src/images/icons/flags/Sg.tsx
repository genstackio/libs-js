import * as React from 'react';

function SvgSg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <clipPath id="sg_svg__a">
                    <path fillOpacity={0.67} d="M0 0h640v480H0z" />
                </clipPath>
            </defs>
            <g fillRule="evenodd" clipPath="url(#sg_svg__a)">
                <path fill="#fff" d="M-20 0h720v480H-20z" />
                <path fill="#df0000" d="M-20 0h720v240H-20z" />
                <path
                    d="M146.05 40.227c-33.243 7.622-57.944 32.237-64.927 65.701-9.488 45.469 20.124 89.99 65.687 99.488-46.031 13.125-93.59-13.332-106.594-58.932-12.996-45.6 13.46-93.16 59.063-106.162 16.007-4.565 30.745-4.594 46.773-.095z"
                    fill="#fff"
                />
                <path
                    fill="#fff"
                    d="M132.98 109.953l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.144-12.833-9.354 15.876-.137 4.932-15.106 5.031 15.069 15.889.025zm17.559 52.059l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.877-.137 4.931-15.106 5.032 15.07 15.888.024zm58.425-.375l4.894 15.119-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.877-.137 4.931-15.106 5.032 15.07 15.888.024zM226.392 110l4.894 15.118-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.354 15.877-.137 4.932-15.106 5.03 15.069 15.89.025zm-46.256-34.256l4.894 15.118-12.932-9.23-12.87 9.317 4.783-15.143-12.833-9.355 15.876-.136 4.932-15.106 5.032 15.068 15.888.025z"
                />
            </g>
        </svg>
    );
}

export default SvgSg;
