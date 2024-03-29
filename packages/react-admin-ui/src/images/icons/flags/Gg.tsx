import * as React from 'react';

function SvgGg(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 640 480"
            width={props.width || 640}
            height={props.height || 480}
            {...props}
        >
            <path d="M0 0h640v480H0z" fill="#fff" />
            <path d="M256 0h128v480H256z" fill="#e8112d" />
            <path d="M0 176h640v128H0z" fill="#e8112d" />
            <path
                id="gg_svg__a"
                d="M109.991 286.667l23.342-23.343h210.01v-46.666h-210.01l-23.342-23.325z"
                fill="#f9dd16"
            />
            <use xlinkHref="#gg_svg__a" transform="rotate(90 320 240)" height={24} width={36} />
            <use xlinkHref="#gg_svg__a" transform="rotate(-90 320 240)" height={24} width={36} />
            <use xlinkHref="#gg_svg__a" transform="rotate(180 320 240)" height={24} width={36} />
        </svg>
    );
}

export default SvgGg;
